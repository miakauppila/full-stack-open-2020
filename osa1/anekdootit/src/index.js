import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  console.log(props);
  return (
    <button disabled={props.disable} onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

const App = (props) => {
  //create an array with zeros for storing points
  const points = new Array(anecdotes.length).fill(0);
  // use points array as initial value
  const [votes, setVotes] = useState(points);
  // the anecdote shown above in the page
  const [selected, setSelected] = useState(0);
  // used for disabling vote button after one click per anecdote
  const [disableBtn, setDisableBtn] = useState(false);
  console.log("votes", votes);

  const handleClickNext = () => {
    //get a random nb. currently between 0 and 5
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
    setDisableBtn(false);
  };

  const handleClickVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    setDisableBtn(true);
  };

  //find the index of largest value in votes
  const indexOfMaxValue = votes.indexOf(Math.max(...votes));
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button
        handleClick={handleClickVote}
        text={"vote"}
        disable={disableBtn}
      />
      <Button
        handleClick={handleClickNext}
        text={"next anecdote"}
        disable={false}
      />
      <h1>Anecdote with most votes</h1>
      <div>{props.anecdotes[indexOfMaxValue]}</div>
      <div>has {votes[indexOfMaxValue]} votes</div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
