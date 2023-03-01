import monthNames from '../../constants/monthNames';


const getFormattedDate = (date, timezone) => {
  date = new Date(date);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const zone = timezone === 'America/Los_Angeles' ? 'PST' : timezone === 'America/Chicago' ? 'CT' : 'EST';
  return `${day} ${monthNames[month]} ${year}, ${hours}:${minutes} ${zone}`;
};

export default getFormattedDate;
