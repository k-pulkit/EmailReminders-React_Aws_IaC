#! /usr/bin/bash

# Run sls info --verbose and filter lines containing the relevant information
output=$(sls info --verbose)
serviceEndpoint=$(echo "$output" | grep "ServiceEndpoint" | awk -F': ' '{print $2}')
hostedUIURL=$(echo "$output" | grep "HostedUIURL" | awk -F': ' '{print $2}')
CognitoClientId=$(echo "$output" | grep "CognitoClientId" | awk -F': ' '{print $2}')
CognitoPoolId=$(echo "$output" | grep "CognitoPoolId" | awk -F': ' '{print $2}')

# Create a JSON string
json="{\"ServiceEndpoint\": \"$serviceEndpoint\", \"HostedUIURL\": \"$hostedUIURL\", \"CognitoClientId\": \"$CognitoClientId\", \"CognitoPoolId\": \"$CognitoPoolId\"}"

# Save the JSON string to a file
echo $json > ../frontend/config.json