export const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
};
