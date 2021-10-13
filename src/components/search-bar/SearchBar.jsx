import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const search = () => {
    setQuery("");
  };

  return (
    <div data-testid="search-bar">
      <input value={query} onChange={handleChange} placeholder="Type here" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default SearchBar;
