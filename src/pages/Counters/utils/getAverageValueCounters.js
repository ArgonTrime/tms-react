import { getSumCounters } from ".";

const getAberageValueCounters = (counters) => {
  if (counters.length === 0) return 0;
  return Math.round(getSumCounters(counters) / counters.length);
};
export default getAberageValueCounters;
