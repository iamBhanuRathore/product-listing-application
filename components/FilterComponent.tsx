import React, { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

const FilterComponent = ({
  query,
  setQuery,
}: {
  query: { color: string; capacity: string };
  setQuery: Dispatch<
    SetStateAction<{
      color: string;
      capacity: string;
    }>
  >;
}) => {
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="drop-shadow-md flex w-3/4 gap-x-10 p-5  rounded-md mx-auto">
      <input
        className="primary-input"
        placeholder="Search By Color"
        onChange={handleFilter}
        value={query.color}
        name="color"
      />
      <input
        className="primary-input"
        placeholder="Search By Capacity"
        onChange={handleFilter}
        value={query.capacity}
        name="capacity"
      />
      {/* <Button className="w-full" variant="default">
        Search
      </Button> */}
    </div>
  );
};

export default FilterComponent;
