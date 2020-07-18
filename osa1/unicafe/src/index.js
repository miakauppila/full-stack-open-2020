import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  //destructure props
  const { good, neutral, bad, all, average, positive } = props;
  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <table style={{ border: "1px solid black" }}>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={(average / all).toFixed(1)} />
            <StatisticLine
              text="positive"
              value={((positive / all) * 100).toFixed(1) + " %"}
            />
          </tbody>
        </table>
      </div>
    );
  }
};

const StatisticLine = (props) => {
  //console.log(props.value);
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
    setAverage(average + 1);
    setPositive(positive + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
    setAverage(average - 1);
  };

  const all = good + neutral + bad;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text={"neutral"} />
      <Button handleClick={handleClickBad} text={"bad"} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
