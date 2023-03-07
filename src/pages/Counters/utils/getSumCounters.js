const getSumOfCounters = (counters) => {
  if (counters.length === 0) return 0;
  return counters.reduce((result, { countValue }) => result + countValue, 0);
};
export default getSumOfCounters;
