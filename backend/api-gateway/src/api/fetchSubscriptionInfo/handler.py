import json
import boto3
import os

DDB_TABLE_NAME = os.environ["SubscriberDynamoTableName"]
SNS_TOPIC_NAME = os.environ["SNSTopicName"]
SNS_TOPIC_ARN = os.environ["SNSTopicARN"]

cognito = boto3.client('cognito-idp')
dynamodb = boto3.resource('dynamodb')
sns = boto3.resource('sns')

def run(event, context):
    
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
    topic = sns.Topic(SNS_TOPIC_ARN)
    
    # Now, we check if email exists in out DDB table
    res1 = table.query(
            KeyConditionExpression ="email = :e",
            ExpressionAttributeValues = {
                ":e": email
            })
    
    # If there is no result, then we need to create a subscription first
    if (res1["Count"] == 0):
        subscription = topic.subscribe(
            Protocol = "email",
            Endpoint = email,
            Attributes = {
                "FilterPolicy": json.dumps({'to': [email]})
            },
            ReturnSubscriptionArn = True
            )
        subscriptionArn = subscription.arn
        subscriptionAttributes = subscription.attributes
        
        # Update the record in dynamodb
        table.put_item(
            Item= {'email': email, 'subscriptionArn': subscriptionArn}
        )
    else:
        subscriptionArn = res1["Items"][0]["subscriptionArn"]
        subscriptionAttributes = boto3.client("sns").get_subscription_attributes(
                                        SubscriptionArn = subscriptionArn
                                    )["Attributes"]
        
    # Check if the subscription is pending verification
    isPendingVerification = subscriptionAttributes["PendingConfirmation"]
    
    body = {
        "isPendingVerification": isPendingVerification
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response
