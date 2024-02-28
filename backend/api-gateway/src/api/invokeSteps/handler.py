import json
import boto3
import os

DDB_TABLE_NAME = os.environ["DynamoTableName"]
DDB_SUB_TABLE_NAME = os.environ["SubscriberDynamoTableName"]
STATES_ARN = os.environ["StepFxnArn"]

cognito = boto3.client('cognito-idp')
dynamodb = boto3.resource('dynamodb')
steps = boto3.client('stepfunctions')

multiplier_map = {
    "seconds": 1,
    "minutes": 60,
    "hours": 60*60,
    "days": 24*60*60
}

def run(event, context):
    
    print(event)
    
    # Input body
    req_body = event["body"]
    
    if "Authorization" not in event["headers"]:
        return {
            "statusCode": 400,
            "Error": "No Authorization Code found"
        }
    
    # Fetch the token    
    token = event["headers"]["Authorization"]
    
    try:
        user = cognito.get_user(AccessToken=token)
    except Exception as e:
        return {
            "statusCode": 404,
            "Error": "Failed to retrieve user details using token"
        }
    
    # Fetch the email
    email = [x["Value"] for x in user["UserAttributes"] if x['Name'] == 'email'][0]
    print(f"Email of user is {email}")
    
    # You can only put messages for same email as the token
    if req_body["email"] != email:
        return {
            "statusCode": 400,
            "body": "Unauthorized"
        }
        
    # prepare data for step function
    data = dict()
    data["messageid"] = req_body["messageid"]
    data["email"] = req_body["email"]
    data["subject"] = req_body["subject"]
    data["message"] = req_body["message"]
    data["delay"] = req_body["delay"] * multiplier_map[req_body["delayType"].lower()]
        
    # Trigger the step function
    res2 = steps.start_execution(
        stateMachineArn = STATES_ARN,
        input = json.dumps(data)
    )
    
    # Add the execution Arn to the initial message body
    executionArn = res2["executionArn"]
    req_body["executionArn"] = executionArn    

    # Get reference to table and sns topic
    table = dynamodb.Table(DDB_TABLE_NAME)
    
    # insert in table
    res = table.put_item(
        Item = req_body
    )
    
    print("Dynamo resp")
    print(res)
    
    body = {
        "body": req_body,
        "resp": res
    }

    response = {
        "statusCode": res['ResponseMetadata']['HTTPStatusCode'],
        "body": json.dumps(body)
    }

    return response
