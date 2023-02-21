import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddMessage = ({onMessage}) => {
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    onMessage(message);
    setMessage("");
  };

  const inputHandler = (event) => {
    setMessage(event.target.value);
  };

  const isDisabled = () => {
    return message === "";
  };

  return (
    <form onSubmit={submitHandler} className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter your message..."
        value={message}
        onChange={inputHandler}
      />
      <div className="input-group-append">
        <button className="btn submit-button" disabled={isDisabled()}>
          SEND
        </button>
      </div>
    </form>
  );
};

AddMessage.propTypes = {
    onMessage: PropTypes.func.isRequired,
  };

export default AddMessage;
