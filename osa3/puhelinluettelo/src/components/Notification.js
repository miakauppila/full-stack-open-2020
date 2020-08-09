import React from "react";

const Notification = ({ message, errorMessage }) => {
  if (message === null && errorMessage === null) {
    return null;
  }

  if (message) {
    return <div className="message">{message}</div>;
  }
  if (errorMessage) {
    return <div className="error">{errorMessage}</div>;
  }
};

export default Notification;
