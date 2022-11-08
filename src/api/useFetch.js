import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ProdCode, setProdCode] = useState(null);
  const [ProdName, setProdName] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setProdCode(response.data.normal.data[0].map((dish) => dish.dish_code));
        setProdName(response.data.normal.data[0].map((dish) => dish.dish_name));
        console.log('from usefetch',response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const refetch = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setProdCode(response.data.normal.data[0].map((dish) => dish.dish_code));
        setProdName(response.data.normal.data[0].map((dish) => dish.dish_name));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, refetch, ProdCode, ProdName };
}

export default useFetch;
