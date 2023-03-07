const incrementEvenCounters = (counters) => {
  return counters.map((counter) => {
    if (counter.countValue % 2 === 0) {
      return { ...counter, countValue: counter.countValue + 1 };
    }
    return counter;
  });
};
export default incrementEvenCounters;
