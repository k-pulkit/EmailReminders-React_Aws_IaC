import json
import boto3
import os
import decimal

DDB_TABLE_NAME = os.environ["DynamoTableName"]

cognito = boto3.client('cognito-idp')
dynamodb = boto3.resource('dynamodb')

class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return str(o)
        return super().default(o)

def run(event, context):
    
    messageid = event["path"]["messageid"]
    print(messageid)
    
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
    
    # Now, we check if email exists in out DDB table
    res1 = table.query(
            KeyConditionExpression ="messageid = :mid",
            ExpressionAttributeValues = {
                ":mid": messageid
            })
    
    # Check if any result is present
    if res1["Count"] == 0:
        return  {
            "statusCode": 404,
            "body": "MessageId not found"
        }

    # You cannot delete messages of some other account
    item = res1["Items"][0]
    if item["email"] != email:
        return  {
            "statusCode": 400,
            "body": "Unauthorized"
        }
    
    # Now, we delete the item
    res2 = table.delete_item(
        Key = {
            "messageid": item["messageid"],
            "timestamp": int(item["timestamp"])
        }
    )
    
    return {
        "status": res2['ResponseMetadata']['HTTPStatusCode']
    }
