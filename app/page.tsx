"use client";
import AddProduct from "@/components/AddProduct";
import Chart from "@/components/Chart";
import FilterComponent from "@/components/FilterComponent";
import ProductList from "@/components/ProductList";
import axios from "axios";
import queryString from "query-string";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState({
    color: "",
    capacity: "",
  });

  const getProduct = async () => {
    try {
      const url = queryString.stringifyUrl(
        {
          url: "/api/products",
          query: {
            ...query,
          },
        },
        { skipNull: true }
      );
      const { data } = await axios.get(url);
      setProducts(data);
    } catch (error) {
      alert("Error Occured");
    }
  };

  useEffect(() => {
    getProduct();
  }, [query]);
  return (
    <div className="w-3/4 mx-auto">
      <AddProduct getProduct={getProduct} />
      <FilterComponent query={query} setQuery={setQuery} />
      <ProductList products={products} />
      <Chart data={products} />
    </div>
  );
}
