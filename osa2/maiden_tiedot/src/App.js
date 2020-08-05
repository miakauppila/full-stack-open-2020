import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  //get data from rest API with axios
  //useEffect runs once, updates state and component rerenders
  useEffect(() => {
    console.log("effect");
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        console.log("promise fulfilled");
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("render", countries.length, "countries");
  //console.log(countries);

  const onChangeHandler = (e) => {
    setFilter(e.target.value);
  };

  const updateFilter = (name) => {
    console.log(name);
    setFilter(name);
  };

  return (
    <div className="App">
      <div>
        find countries <input onChange={onChangeHandler} />
      </div>
      <Countries
        countries={countries}
        filter={filter}
        updateFilter={updateFilter}
      />
    </div>
  );
};

export default App;
