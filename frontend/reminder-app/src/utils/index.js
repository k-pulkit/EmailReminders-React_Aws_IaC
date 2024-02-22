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

export function getDayOfWeek(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 0:
            dayName = 'Sunday';
            break;
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        default:
            dayName = 'Invalid day number';
    }

    return dayName;
}


export function delayTypeSeconds(delayType) {
  let multiplier;
  switch (delayType) {
    case "Seconds":
      multiplier = 1
      break;
    case "Minutes":
      multiplier = 60
      break;
    case "Hours":
      multiplier = 60*60
      break;
    case "Days":
      multiplier = 24*60*60
      break;
    default:
      throw new Error(`Invalid delay type - ${delayType}!!`)
  } 
  return multiplier;
}

export function epochAfterDelay(delay, delayType) {
  const m = delayTypeSeconds(delayType)
  const currentDate = new Date();
  return currentDate.getTime() + delay * m * 1000
}

export function getLocalTimeFromEpoch(epoch) {
  const _ = new Date(epoch);
  return `${getDayOfWeek(_.getDay())}, ${_.toLocaleString()}`
}

export default setReminder;