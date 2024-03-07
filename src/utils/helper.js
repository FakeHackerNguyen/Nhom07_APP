// format Date

function formatDate(date, options = {}) {
  return Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

function calculateExperience(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  if (years === 0) {
    return `${months} mos`;
  }

  return `${years} yrs ${months} mos`;
}

export {formatDate, calculateExperience};
