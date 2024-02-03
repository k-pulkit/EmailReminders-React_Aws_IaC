#! /usr/bin/bash

usage() {
    echo "Usage: $0 <envfile> [stage]"
    echo "arg1: Location of frontend env file"
    echo "arg2: Stage deployed"
    exit 1
}

if [ "$#" -lt 1 ]; then
    echo "Error: Invalid number of arguments supplied!"
    usage
fi

envfile="$1"
stage="${2:-dev}"

# switch to serverless compose root dir
cd ../.. 

echo "Env file to write located at $envfile"
echo "Stage is $stage"
echo "Dir is $(pwd)"

# Run sls info --verbose and filter lines containing the relevant information
command1="sls cognito:info --verbose --stage $stage"
command2="sls apigateway:info --verbose --stage $stage"
echo "Running commands"
echo "$command1"
echo "$command2"

output1=$(${command1})
output2=$(${command2})
output="$output1\n$output2"
echo -e "Outputs are $output"

serviceEndpoint=$(echo "$output" | grep "ServiceEndpoint" | awk -F': ' '{print $2}')
hostedUIURL=$(echo "$output" | grep "HostedUIURL" | awk -F': ' '{print $2}')
cognitoClientId=$(echo "$output" | grep "CognitoClientId" | awk -F': ' '{print $2}')
cognitoPoolId=$(echo "$output" | grep "CognitoPoolId" | awk -F': ' '{print $2}')

# Create .env file
echo "SERVICE_ENDPOINT=$serviceEndpoint" > $envfile
echo "HOSTED_UI_URL=$hostedUIURL" >> $envfile
echo "COGNITO_CLIENT_ID=$cognitoClientId" >> $envfile
echo "COGNITO_POOL_ID=$cognitoPoolId" >> $envfile


# Create a JSON string
#json="{\"ServiceEndpoint\": \"$serviceEndpoint\", \"HostedUIURL\": \"$hostedUIURL\", \"CognitoClientId\": \"$CognitoClientId\", \"CognitoPoolId\": \"$CognitoPoolId\"}"
# Save the JSON string to a file
#echo $json > ../frontend/config.json