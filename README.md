# Reminder App
<img width="772" alt="image" src="https://github.com/k-pulkit/EmailReminders-React_Aws_IaC/assets/71238192/386d3778-eedc-4a33-b50f-ed5a44b63b62">

## About
This application is built with a modern tech stack, leveraging various AWS services for backend functionalities, and React for the frontend. It offers a comprehensive authentication flow and reminder management system.

## Tech Stack
<img width="772" alt="image" src="https://github.com/k-pulkit/EmailReminders-React_Aws_IaC/assets/71238192/4614ccaa-bf9b-4762-9c8e-675540150664">

- **Frontend**: React, JavaScript, Tailwind CSS
- **Backend (AWS)**:
  - Cognito User Pools
  - API Gateway
  - IAM
  - Lambda Functions
  - Simple Notification Service (SNS)
  - Step Functions
- **Infrastructure as Code (IaC)**: Serverless, CloudFormation
- **Deployment**: GitHub Pages

## Features
- **Authentication Flow**: Seamless account creation, login, and logout powered by AWS Cognito User Pools.
- **Reminder Creation**: Users can set reminders via the application, specifying the delay after which reminders are sent to their email.
- **Reminder Management**: Users can view a list of active reminders and have completed reminders automatically deleted. Additionally, they can manually abort reminders.

Feel free to contribute and improve this application!

# Run it
Clone the repo and run the below commands
```bash
# Deploy infrastructure
npm init -y
sls deploy

# Run locally
cd ./frontend/reminder-all
npm run dev
```

# Demo 
<video src="https://github.com/k-pulkit/EmailReminders-React_Aws_IaC/assets/71238192/38c2c17a-c484-459f-94f0-b129566e2f70" width="320" height="240"></video>  

