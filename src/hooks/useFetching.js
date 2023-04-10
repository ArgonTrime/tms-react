import { useCallback, useState } from "react";
const useFetching = (requestFunction) => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleDataLoad = useCallback(
    (...args) => {
      (async () => {
        try {
          setLoading(true);
          const responce = await requestFunction(...args);
          setData(responce);
        } catch (errors) {
          setErrors(errors.responce.data);
        } finally {
          setLoading(false);
        }
      })();
    },
    [requestFunction]
  );

  return { data, errors, handleDataLoad, isLoading };
};

export default useFetching;
