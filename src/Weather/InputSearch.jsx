import React, { useState } from "react";

const InputSearch = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Change location..."
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          name="search"
        />
      </label>
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded gap-23"
      >
        Change
      </button>
    </div>
  );
};

export default InputSearch;
