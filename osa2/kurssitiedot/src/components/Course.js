import React from "react";

const Course = (props) => {
  const { course } = props;
  return (
    <div>
      <li>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </li>
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
};

const Content = (props) => {
  const { parts } = props;
  return (
    <div>
      <ul>
        {parts.map((part) => (
          <Part
            key={part.name}
            partName={part.name}
            exercises={part.exercises}
          />
        ))}
      </ul>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <li>
        {props.partName} {props.exercises}
      </li>
    </div>
  );
};

const Total = (props) => {
  const { parts } = props;
  //reduce array to a single value, initialValue 0
  const total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return (
    <div>
      <p>Total of {total} exercises</p>
    </div>
  );
};

export default Course;
