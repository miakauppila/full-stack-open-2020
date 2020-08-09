import React from "react";

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addNew}>
        <div>
          name:
          <input
            required
            value={props.newName}
            onChange={props.onChangeNameHandler}
          />
        </div>
        <div>
          number:
          <input
            required
            value={props.newNumber}
            onChange={props.onChangeNumberHandler}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
