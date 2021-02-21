import React from "react";

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addNew}>
        <div className="input-field">
        <i className="material-icons prefix">account_circle</i>
          <input
            required
            placeholder="First and last name"
            value={props.newName}
            onChange={props.onChangeNameHandler}
          />
        </div>
        <div className="input-field">
        <i className="material-icons prefix">phone</i>
          <input
            required
            placeholder="Phone number"
            value={props.newNumber}
            onChange={props.onChangeNumberHandler}
          />
        </div>
        <div>
          <button className="waves-effect waves-light btn" type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
