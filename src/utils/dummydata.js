import { useState, useEffect } from "react";

function useGetData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://shoppy-globe-backend-0xlo.onrender.com/api/products");
        const json = await res.json();
        console.log("data", json);
        setData(json);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }

    fetchData();
  }, []);

  return data;
}
export function useGetSingleProduct(id) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://shoppy-globe-backend-0xlo.onrender.com/api/products/${id}`);
        const json = await res.json();
        console.log("api data",json)
        setProduct(json);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }

    if (id) fetchProduct();
  }, [id]);

  return product;
}

export default useGetData;
