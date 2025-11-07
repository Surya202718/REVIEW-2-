import { useState, useEffect } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
