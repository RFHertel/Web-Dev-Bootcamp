// DEFINE YOUR FUNCTION BELOW:
function returnDay(num) {
  const ActualDay = num - 1
  if (ActualDay < 0 || ActualDay > 6) {
    return null;
  }
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return days[ActualDay];
}
