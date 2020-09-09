export default (timestamp) => {
  const date = new Date(timestamp);
  const strDate = `${date.getDate()} / ${
    date.getMonth() + 1
  } / ${date.getFullYear()}`;
  return strDate;
};
