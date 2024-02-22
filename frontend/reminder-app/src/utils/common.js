import toast from "react-hot-toast";
import { post } from "@aws-amplify/api";
import md5 from 'blueimp-md5';

// Unique message id
export function generateMessageId(email, token) {
  /* Usage:
   const email = 'example@example.com';
   const messageId = generateMessageId(email);
   console.log(messageId); */
  const timestamp = Date.now().toString();
  const data = timestamp + (token ?? "") + email;
  const hash = md5(data);
  return hash;
}


// SET OF FUNCTIONS FOR DATE MANIPULATION
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