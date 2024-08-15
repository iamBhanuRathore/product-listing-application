import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="p-5 shadow-md border-[1px] border-gray-200 rounded-md">
      <p className="text-3xl font-bold">{product.name}</p>
    </div>
  );
};

export default ProductCard;
