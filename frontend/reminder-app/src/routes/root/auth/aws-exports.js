const env = await import.meta.env;

const awsExports = {
    Auth: {
        Cognito: {
            userPoolId: env.VITE_COGNITO_POOL_ID,
            userPoolClientId: env.VITE_COGNITO_CLIENT_ID
        }
    }
}

// console.log(awsExports)

export default awsExports;