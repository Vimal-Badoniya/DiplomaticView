export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  if (!dateString) return new Date().toLocaleDateString(undefined, options);
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};
