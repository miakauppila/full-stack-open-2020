import React from "react";

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addNew}>
        <div className="input-field">
          <i className="material-icons prefix">account_circle</i>
          <input
            id="nameInput"
            required
            placeholder="First and last name"
            value={props.newName}
            onChange={props.onChangeNameHandler}
          />
        </div>
        <div className="input-field">
          <i className="material-icons prefix">phone</i>
          <input
            id="phoneInput"
            required
            placeholder="Phone number"
            value={props.newNumber}
            onChange={props.onChangeNumberHandler}
          />
        </div>
        <div>
          <button id="addBtn" className="waves-effect waves-light btn" type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
