import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="p-5 shadow-md border-[1px] border-gray-200 rounded-md">
      <p className="text-3xl font-bold">{product.name}</p>
      <RenderJson data={product.data} />
    </div>
  );
};

export default ProductCard;

// Recursive component to render nested JSON
const RenderJson = ({ data }: { data: any }) => {
  if (typeof data === "object" && data !== null) {
    return (
      <div style={{ paddingLeft: "10px" }}>
        {Object.keys(data).map((key) => (
          <div key={key}>
            <strong>{key}:</strong>{" "}
            {typeof data[key] === "object" ? (
              <RenderJson data={data[key]} />
            ) : (
              <span>{data[key].toString()}</span>
            )}
          </div>
        ))}
      </div>
    );
  } else {
    return <span>{data}</span>;
  }
};
