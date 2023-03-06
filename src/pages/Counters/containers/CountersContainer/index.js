import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

import {
  getAverageValueCounters,
  getSumCounters,
  incrementEvenCounters,
  decrementOddCounters,
} from "../../utils";
import CountersView from "../../components/CountersView";

const CountersContainer = () => {
  const [counters, setConters] = useState([]);

  const counterStats = {
    countCounters: counters.length,
    sumCounters: getSumCounters(counters),
    averageValueCounters: getAverageValueCounters(counters),
  };

  const handleAddCounter = useCallback(() => {
    setConters((state) => {
      const copyCounters = incrementEvenCounters(structuredClone(state));
      const counter = {
        id: uuid(),
        countValue: 0,
      };
      copyCounters.push(counter);
      return copyCounters;
    });
  }, []);

  const handleRemoveAllCounters = () => {
    setConters([]);
  };

  const handleRemoveCounter = useCallback((id) => {
    setConters((state) => {
      const copyCounters = structuredClone(state);
      const counterIndex = copyCounters.findIndex(
        (counter) => counter.id === id
      );
      copyCounters.splice(counterIndex, 1);
      return decrementOddCounters(copyCounters);
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
      counterStats={counterStats}
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
