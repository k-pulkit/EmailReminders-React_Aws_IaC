const env = await import.meta.env;

const awsExports = {
    Auth: {
        Cognito: {
            userPoolId: env.VITE_COGNITO_POOL_ID,
            userPoolClientId: env.VITE_COGNITO_CLIENT_ID,
        }
    },
    API: {
        REST: {
                "dev-backend-api": 
                    {
                        endpoint: env.VITE_SERVICE_ENDPOINT,
                        region: "us-east-1"
                    }
        }
    }
}

// console.log(awsExports)

export default awsExports;