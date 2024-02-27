import json
import boto3
import os

DDB_TABLE_NAME = os.environ["DynamoTableName"]
DDB_SUB_TABLE_NAME = os.environ["SubscriberDynamoTableName"]

cognito = boto3.client('cognito-idp')
dynamodb = boto3.resource('dynamodb')

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
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response
