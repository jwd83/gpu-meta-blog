// return the current date in YYYY-MM-DD format
export function getCurrentDate(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // month is 0-indexed, hence the "+ 1"
  const day = ("0" + date.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
}
