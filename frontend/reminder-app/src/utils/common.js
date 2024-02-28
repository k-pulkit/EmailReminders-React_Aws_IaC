

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


export function delayTypeSecondsMultiplier(delayType) {
  let multiplier;
  switch (delayType.toLowerCase()) {
    case "seconds":
      multiplier = 1
      break;
    case "minutes":
      multiplier = 60
      break;
    case "hours":
      multiplier = 60*60
      break;
    case "days":
      multiplier = 24*60*60
      break;
    default:
      throw new Error(`Invalid delay type - ${delayType}!!`)
  } 
  return multiplier;
}

export function epochAfterDelay(delay, delayType) {
  const m = delayTypeSecondsMultiplier(delayType)
  const currentDate = new Date();
  return currentDate.getTime() + delay * m * 1000
}

export function getLocalTimeFromEpoch(epoch) {
  const _ = new Date(epoch);
  return `${getDayOfWeek(_.getDay())}, ${_.toLocaleString()}`
}

export function getCompactDateTimeFromEpoch(epoch) {
  const date = new Date(epoch * 1000);
  const year = date.getFullYear().toString().slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export function formatTimeLeft(seconds) {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let result = '';
  if (days > 0) {
    result += `${days}D${days > 1 ? '' : ''} `;
  }
  if (hours > 0 || result !== '') {
    result += `${hours}H${hours > 1 ? '' : ''} `;
  }
  if (minutes > 0 || result !== '') {
    result += `${minutes}M${minutes > 1 ? '' : ''} `;
  }
  result += `${remainingSeconds}S${remainingSeconds > 1 ? '' : ''}`;

  return result.trim();
}