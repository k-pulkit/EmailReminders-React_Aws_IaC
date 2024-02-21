const env = await import.meta.env;

const awsExports = {
    Auth: {
        Cognito: {
            userPoolId: env.VITE_COGNITO_POOL_ID,
            userPoolClientId: env.VITE_COGNITO_CLIENT_ID,
        }
    },
    API: {
        endpoints: [
            {
                name: "MyCustomLambda",
                endpoint: env.VITE_SERVICE_ENDPOINT,
                service: "lambda",
                region: "us-east-1"
            }
        ]
    }
}

console.log(awsExports)

export default awsExports;