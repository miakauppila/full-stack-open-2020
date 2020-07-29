import React, { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  //initial state must be an empty array
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterOn, setFilterOn] = useState("");

  //get data from json server with axios
  //useEffect runs once, updates state and component rerenders
  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "persons");

  const addNew = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };
    if (
      persons.some(
        (person) => person["name"].toLowerCase() === newName.toLowerCase()
      )
    ) {
      window.alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      setPersons([...persons, nameObject]);
      setNewName("");
      setNewNumber("");
    }
  };

  const onChangeNameHandler = (e) => {
    setNewName(e.target.value);
  };

  const onChangeNumberHandler = (e) => {
    setNewNumber(e.target.value);
    //console.log(e.target.value);
  };

  const onChangeFilterHandler = (e) => {
    setFilterOn(e.target.value);
    console.log(e.target.value);
  };

  function findMatches(wordToMatch, persons) {
    return persons.filter((person) => {
      //find out if the person matches the search
      //creates a new rule: g= global i=insensitive
      const regex = new RegExp(wordToMatch, "gi");
      //returns a filtered array
      return person.name.match(regex);
    });
  }

  //returns false for empty string
  //shows either the results of findMatches or persons full array
  const personsToShow = filterOn ? findMatches(filterOn, persons) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input onChange={onChangeFilterHandler} />
      </div>
      <h3>Add new</h3>
      <PersonForm
        addNew={addNew}
        newName={newName}
        onChangeNameHandler={onChangeNameHandler}
        newNumber={newNumber}
        onChangeNumberHandler={onChangeNumberHandler}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
