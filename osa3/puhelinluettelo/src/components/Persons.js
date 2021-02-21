import React from "react";

const Persons = (props) => {
  const { personsToShow, onDelete } = props;
  return (
    <ul className="collection">
      {personsToShow.map((person) => (
        <Person key={person.id} person={person} onDelete={onDelete} />
      ))}
    </ul>
  );
};

const Person = ({ person, onDelete }) => {
  return (
    <li className="collection-item">
      {person.name} &#x25B6; {person.number}{" "}
      <button
        type="button"
        name="Delete button"
        onClick={() => {
          onDelete(person.id);
        }}
        className="secondary-content btn-floating waves-effect waves-light"
      >
        <i className="material-icons">delete</i>
      </button>
    </li>
  );
};

export default Persons;
