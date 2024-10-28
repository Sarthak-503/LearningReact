import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);
  useEffect(() => {
    async function fetcheData() {
      setIsFetching(true);
      try {
        const data = await fetchFn(); // needs a promise
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch user data." });
      }

      setIsFetching(false);
    }

    fetcheData();
  }, [fetchFn]);
  return {
    isFetching,
    fetchedData,
    setFetchedData,
    setIsFetching,
    error,
  };
}
