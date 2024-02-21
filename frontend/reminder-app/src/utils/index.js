import toast from "react-hot-toast";
import { post } from "@aws-amplify/api";

async function setReminder({accessToken, email, message, delay}) {
    try {
      const req = post({ 
        apiName: 'dev-backend-api',
        path: '/remind',
        options: {
          headers: {
            Authorization: accessToken
          },
          body: {
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