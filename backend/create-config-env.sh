#! /usr/bin/bash

# Run sls info --verbose and filter lines containing the relevant information
output=$(sls info --verbose)
serviceEndpoint=$(echo "$output" | grep "ServiceEndpoint" | awk -F': ' '{print $2}')
hostedUIURL=$(echo "$output" | grep "HostedUIURL" | awk -F': ' '{print $2}')
cognitoClientId=$(echo "$output" | grep "CognitoClientId" | awk -F': ' '{print $2}')
cognitoPoolId=$(echo "$output" | grep "CognitoPoolId" | awk -F': ' '{print $2}')

# Create .env file
envfile=../frontend/reminder-app/.env
echo "SERVICE_ENDPOINT=$serviceEndpoint" > $envfile
echo "HOSTED_UI_URL=$hostedUIURL" >> $envfile
echo "COGNITO_CLIENT_ID=$cognitoClientId" >> $envfile
echo "COGNITO_POOL_ID=$cognitoPoolId" >> $envfile


# Create a JSON string
#json="{\"ServiceEndpoint\": \"$serviceEndpoint\", \"HostedUIURL\": \"$hostedUIURL\", \"CognitoClientId\": \"$CognitoClientId\", \"CognitoPoolId\": \"$CognitoPoolId\"}"
# Save the JSON string to a file
#echo $json > ../frontend/config.json