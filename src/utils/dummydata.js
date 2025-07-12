import { useState, useEffect } from "react";

function useGetData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const json = await res.json();
        console.log("data", json);
        setData(json.products);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }

    fetchData();
  }, []);

  return data;
}

export default useGetData;
