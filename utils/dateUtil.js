function getTomorrow() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return tomorrow.toDateString();  // Example: "Thu Jun 26 2025"
}

module.exports = { getTomorrow };
