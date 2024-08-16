import React, { Fragment } from "react";
import ProductCard from "./ProductCard";
// import Chart from "./Chart";
const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <h2 className="text-xl font-bold py-5">Product List</h2>
      <div className="flex flex-col gap-y-4">
        {products.length
          ? products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : "No data"}
      </div>
    </div>
  );
};

export default ProductList;
