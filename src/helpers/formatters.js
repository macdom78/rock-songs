import moment from "moment";

export const formatTime = timeInMilliseconds => {
  if (isNaN(timeInMilliseconds) || timeInMilliseconds < 0) return "";
  const duration = moment.duration(timeInMilliseconds);
  const hours = duration.hours() ? `${duration.hours()}hrs ` : "";
  const minutes = duration.minutes() ? `${duration.minutes()}min(s) ` : "";
  const seconds = duration.seconds() ? `${duration.seconds()}sec(s)` : "";
  return `${hours}${minutes}${seconds}`;
};

export const formatDate = date => {
  if (!moment(date).isValid()) return "";
  return moment(date).format("DD/MM/YYYY");
};

export const formatCurrency = ({ amount, currency }) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(amount);
};
