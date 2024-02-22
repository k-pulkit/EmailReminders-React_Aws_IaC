import { generateMessageId } from "./common";

// To SET THE REMINDER
async function setReminder({accessToken, email, message, subject, delay}) {
    try {
      const req = post({ 
        apiName: 'dev-backend-api',
        path: '/remind',
        options: {
          headers: {
            Authorization: accessToken
          },
          body: {
            "messageid": generateMessageId(email, accessToken),  // unique id of message
            "timestamp": Date.now(),                // epoch time
            "subject": subject,
            "message": message,
            "email": email,
            "delay": delay
        }
        }
      });
      const response = await req.response;
      const jsonresponse = await response.body.json();
      toast.success('Reminder has been set.');
    } catch (error) {
      toast.error(`Failed to set reminder!! : ${error.message}`);
    }
  }

export default setReminder;