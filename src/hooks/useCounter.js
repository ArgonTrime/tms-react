import { useCallback, useEffect, useState } from "react";

const useCounter = (initialValue) => {
  const [countValue, setCountValue] = useState(initialValue);
  const [isEven, setEven] = useState(true);

  const handleIncrement = useCallback(() => {
    setCountValue((state) => state + 1);
  }, []);
  const handleDecrement = useCallback(() => {
    setCountValue((state) => state - 1);
  }, []);
  const handleReset = useCallback(() => {
    setCountValue(0);
  }, []);

  useEffect(() => {
    setEven(countValue % 2 === 0);
  }, [countValue]);

  return {
    countValue,
    isEven,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};

export default useCounter;
