import React, { Dispatch, SetStateAction } from "react";

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
  // Should Add Debouncing in the Filter Component
  return (
    <div className="drop-shadow-md flex gap-x-10 p-5 items-center rounded-md">
      <p className="text-xl font-bold whitespace-nowrap">Filter :</p>
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
    </div>
  );
};

export default FilterComponent;
