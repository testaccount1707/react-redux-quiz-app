import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

axios.defaults.baseURL="https://opentdb.com/"

function useAxios({ url }) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function fetchData() {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
    fetchData();
  }, [url]);

  return { response, error, loading };
}

export default useAxios;
