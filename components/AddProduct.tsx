import axios from "axios";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const AddProduct = ({ getProduct }: { getProduct: () => void }) => {
  const [inputs, setInputs] = useState<Pick<Product, "data" | "name">>({
    name: "",
    data: "",
  });
  const [loading, setLoading] = useState(false);
  const handleAdd = async () => {
    try {
      setLoading(true);
      await axios.post("/api/product", {
        ...inputs,
      });
      getProduct();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="drop-shadow-md flex gap-x-10 p-5 bg-gray-300 rounded-md my-5">
      <input
        className="primary-input"
        onChange={handelChange}
        name="name"
        type="text"
        disabled={loading}
        placeholder="Enter Name"
      />
      <input
        className="primary-input"
        onChange={handelChange}
        name="data"
        disabled={loading}
        type="text"
        placeholder="Enter a valid JSON"
      />
      <Button
        className="w-full"
        disabled={loading}
        variant="default"
        onClick={handleAdd}>
        Add New Product
      </Button>
    </div>
  );
};

export default AddProduct;
