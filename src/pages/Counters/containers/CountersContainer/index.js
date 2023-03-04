import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

import { getAberageValueCounters, getSumCounters } from "../../utils";
import CountersView from "../../components/CountersView";

const CountersContainer = () => {
  const [counters, setConters] = useState([]);

  const commonValues = {
    countCounters: counters.length,
    sumCounters: getSumCounters(counters),
    averageValueCounters: getAberageValueCounters(counters),
  };

  const handleAddCounter = useCallback(() => {
    setConters((state) => {
      const counter = {
        id: uuid(),
        countValue: 0,
      };
      return [...state, counter];
    });
  }, []);
  const handleRemoveAllCounters = useCallback(() => {
    setConters((state) => []);
  }, []);

  const handleRemoveCounter = useCallback((id) => {
    setConters((state) => {
      const copyCounters = structuredClone(state);
      const indexCounter = copyCounters.findIndex(
        (counter) => counter.id === id
      );
      copyCounters.splice(indexCounter, 1);
      return copyCounters;
    });
  }, []);

  const handleIncrement = useCallback((id) => {
    setConters((state) => {
      const copyCounters = structuredClone(state);
      return copyCounters.map((counter) => {
        if (counter.id === id) {
          return { ...counter, countValue: counter.countValue + 1 };
        }
        return counter;
      });
    });
  }, []);

  const handleDecrement = useCallback((id) => {
    setConters((state) => {
      const copyCounters = structuredClone(state);
      return copyCounters.map((counter) => {
        if (counter.id === id && counter.countValue > 0) {
          return { ...counter, countValue: counter.countValue - 1 };
        }
        return counter;
      });
    });
  }, []);

  const handleReset = useCallback((id) => {
    setConters((state) => {
      const copyCounters = structuredClone(state);
      return copyCounters.map((counter) => {
        if (counter.id === id && counter.countValue > 0) {
          return { ...counter, countValue: 0 };
        }
        return counter;
      });
    });
  }, []);

  return (
    <CountersView
      counters={counters}
      commonValues={commonValues}
      handleAddCounter={handleAddCounter}
      handleRemoveAllCounters={handleRemoveAllCounters}
      handleRemoveCounter={handleRemoveCounter}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
    />
  );
};
export default CountersContainer;
