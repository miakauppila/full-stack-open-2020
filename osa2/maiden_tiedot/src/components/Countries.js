import React from "react";
import Country from "./Country";

const Countries = ({ countries, filter, updateFilter }) => {
  function findMatches(wordToMatch, countries) {
    return countries.filter((country) => {
      //find out which countries match the search
      //creates a new rule: g= global i=insensitive
      const regex = new RegExp(wordToMatch, "gi");
      //returns a filtered array
      return country.name.match(regex);
    });
  }

  if (filter === "") {
    return null;
  }

  const searchResults = findMatches(filter, countries);
  if (searchResults.length > 1 && searchResults.length <= 10) {
    return (
      <ul>
        {searchResults.map((country) => (
          <li key={country.cioc}>
            {country.name}
            <button
              onClick={() => {
                updateFilter(country.name);
              }}
            >
              show
            </button>
          </li>
        ))}
      </ul>
    );
  }
  if (searchResults.length === 1) {
    const country = searchResults[0];
    return <Country country={country} />;
  }
  if (searchResults.length === 0) {
    return <p>no countries found</p>;
  } else {
    return <p>too many matches, please specify another filter</p>;
  }
};

export default Countries;
