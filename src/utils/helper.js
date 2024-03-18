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

// calculate time ago from current date
function calculateTimeAgo(date) {
  const currentDate = new Date();
  const pastDate = new Date(date);
  const timeDifference = currentDate - pastDate;
  const timeAgo = timeDifference / 1000 / 60 / 60 / 24;

  let result;
  // year ago
  if (timeAgo >= 365) {
    result = `${Math.floor(timeAgo / 365)} years ago`;
  }

  // month ago
  if (timeAgo >= 30) {
    result = `${Math.floor(timeAgo / 30)} months ago`;
  }

  // week ago
  if (timeAgo >= 7) {
    result = `${Math.floor(timeAgo / 7)} weeks ago`;
  }

  // day ago
  if (timeAgo >= 1) {
    result = `${Math.floor(timeAgo)} days ago`;
  }

  // hour ago
  if (timeAgo < 1) {
    if (timeDifference / 1000 > 1) {
      result = `${Math.floor(timeDifference / 1000)} seconds ago`;
    }
    if (timeDifference / 1000 / 60 > 1) {
      result = `${Math.floor(timeDifference / 1000 / 60)} minutes ago`;
    }
    if (timeDifference / 1000 / 60 / 60 > 1) {
      result = `${Math.floor(timeDifference / 1000 / 60 / 60)} hours ago`;
    }
  }

  return result;
}

export {formatDate, calculateExperience, calculateTimeAgo};
