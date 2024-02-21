import React, { useState } from "react";
import search from "../../assets/search.svg";
import "./Searchbar.css";

/**
 * Searchbar component for searching ingredients.
 * @param {Object} props - Component props.
 * @param {function} props.onSearch - Function to call when search is initiated.
 */

const Searchbar = ({
  onSearch,
}: {
  onSearch: (ingredient: string) => void;
}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchInput);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="search-container">
      <input
        type="search"
        className="search-input"
        placeholder="Ingredient..."
        value={searchInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button className="search-button" onClick={handleSearch}>
        <img src={search} alt="search-icon" className="search-icon" />
      </button>
    </section>
  );
};

export default Searchbar;
