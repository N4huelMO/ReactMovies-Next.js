export const formatDate = (date) => {
  const formatted = new Date(date);

  const options = { day: "numeric", year: "numeric", month: "short" };

  return formatted.toLocaleDateString("en-us", options);
};
