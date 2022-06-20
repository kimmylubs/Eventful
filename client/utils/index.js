export const parseTime = (time) => {
  if (!time) return "";

  const hh = time.substring(11, 13);
  const hhs = ((+hh + 11) % 12) + 1;
  const mm = time.substring(14, 16);
  return `${hhs}:${mm} ${hh > 11 ? "PM" : "AM"}`;
};

export const parseTimeEnd = (time) => {
  if (!time) return "";

  const hh = time.substring(11, 13);
  const hhs = ((+hh + 11) % 12) + 1;
  const mm = time.substring(14, 16);
  return `${hhs}:${mm} ${hh > 11 ? "PM" : "AM"}`;
};

export const parseDate = (date) => {
  if (!date) return "";

  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);

  let newDate = `${month}/${day}/${year}`;

  return newDate;
};

export const getDayOfWeek = (date) => {
  const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const d = new Date(date);
  let day = weekday[d.getDay()];

  return day;
};

export const getHasUserJoinedEvent = (user, eventId) => {
  Boolean(user?.joinedEvents?.find((event) => event.id === eventId));
};
