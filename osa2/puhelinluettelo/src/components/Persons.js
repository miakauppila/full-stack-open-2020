import React from "react";

const Persons = (props) => {
  const { personsToShow } = props;
  return (
    <ul>
      {personsToShow.map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
    </ul>
  );
};

const Person = (props) => {
  return (
    <li>
      {props.name} {props.number}
    </li>
  );
};

export default Persons;
