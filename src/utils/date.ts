const getFormatDate = (date: Date) => {
  return new Intl.DateTimeFormat("fr-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};

export { getFormatDate };
