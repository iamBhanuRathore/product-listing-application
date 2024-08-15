import React, { Fragment } from "react";
import ProductCard from "./ProductCard";
// import Chart from "./Chart";
const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <h2>Product List</h2>
      <div className="w-3/4 mx-auto flex flex-col gap-y-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
