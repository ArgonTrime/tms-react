const decrementOddCounters = (counters) => {
  const copyCounters = structuredClone(counters);
  return copyCounters.map((counter) => {
    if (counter.countValue % 2 !== 0 && counter.countValue > 0) {
      return { ...counter, countValue: counter.countValue - 1 };
    }
    return counter;
  });
};
export default decrementOddCounters;
