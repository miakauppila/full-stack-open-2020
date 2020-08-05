import React from "react";

const Persons = (props) => {
  const { personsToShow, onDelete } = props;
  return (
    <ul>
      {personsToShow.map((person) => (
        <Person key={person.id} person={person} onDelete={onDelete} />
      ))}
    </ul>
  );
};

const Person = ({ person, onDelete }) => {
  return (
    <li>
      {person.name} {person.number}{" "}
      <button
        onClick={() => {
          onDelete(person.id);
        }}
      >
        delete
      </button>
    </li>
  );
};

export default Persons;
