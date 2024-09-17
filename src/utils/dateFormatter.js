const formatDate = (isoString) => {
  // Parse the ISO string to a Date object
  const date = parseISO(isoString);

  // Extract the parts for day, month, year
  const day = String(date.getDate()).padStart(2, '0'); // ensures 2 digits
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = String(date.getFullYear()).slice(-2); // Last 2 digits of the year

  // Calculate the relative time (e.g., '1 day ago')
  const relativeTime = formatDistanceToNow(date, { addSuffix: true });

  // Return the formatted date in the desired format
  return `<p>${day}/${month}/${year} (${relativeTime})</p>`;
};

// Example usage
const dateString = '2024-09-17T04:58:29.000000Z';
const formattedDate = formatDate(dateString);

console.log(formattedDate);
