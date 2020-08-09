import React, { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axiosService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  //initial state must be an empty array
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterOn, setFilterOn] = useState("");
  //initial state must be null
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  //useEffect runs first once at start, updates state and component rerenders
  useEffect(() => {
    console.log("effect");
    axiosService.getAll().then((receivedPersons) => {
      setPersons(receivedPersons);
    });
  }, []);
  console.log("render", persons.length, "persons");

  const addNew = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    const personToSearch = persons.find(
      (person) => person["name"].toLowerCase() === newName.toLowerCase()
    );
    if (personToSearch) {
      //window.alert(`${newName} is already added to phonebook`);
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        axiosService
          .update(personToSearch.id, personObject)
          .then((returnedData) => {
            setPersons(
              persons.map((person) =>
                person.id !== personToSearch.id ? person : returnedData
              )
            );
            setNewName("");
            setNewNumber("");
            setMessage(`Changed the data of ${returnedData.name}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            console.log("update error", error);
            setErrorMessage(
              `This person '${personToSearch.name}' was already deleted from server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
            setPersons(
              persons.filter((person) => person.id !== personToSearch.id)
            );
          });
      }
    } else {
      axiosService
        .create(personObject)
        .then((returnedData) => {
          //before: setPersons([...persons, personObject]);
          setPersons(persons.concat(returnedData));
          setNewName("");
          setNewNumber("");
          setMessage(`Added ${returnedData.name}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
          console.log("Create new person error:", error);
          setErrorMessage(error.response.data.error);
        });
    }
  };

  const onChangeNameHandler = (e) => {
    setNewName(e.target.value);
  };

  const onChangeNumberHandler = (e) => {
    setNewNumber(e.target.value);
  };

  const onChangeFilterHandler = (e) => {
    setFilterOn(e.target.value);
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

  const onDeleteHandler = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      axiosService
        .deletePerson(id)
        .then((returnedData) => {
          setPersons(persons.filter((person) => person.id !== id));
          console.log("delete success", returnedData);
          setMessage(`Deleted ${personToDelete.name}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
          console.log("delete error", error);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} errorMessage={errorMessage} />
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
      <Persons personsToShow={personsToShow} onDelete={onDeleteHandler} />
    </div>
  );
};

export default App;
