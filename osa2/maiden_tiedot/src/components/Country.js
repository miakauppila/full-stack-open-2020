import React from "react";
import Weather from "./Weather";

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital {country.capital}</p>
      <p>Population {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <div>
        <img className="flag" src={country.flag} alt="Flag of the country" />
      </div>
      <Weather country={country} />
    </div>
  );
};

export default Country;
