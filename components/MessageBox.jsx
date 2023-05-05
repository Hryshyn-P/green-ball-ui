import React from "react";
import PropTypes from "prop-types";
import "./MessageBox.css";

const MessageBox = ({ inGameMessages }) => {
  if (inGameMessages && inGameMessages.length) {
    return (
      <div className="message-box">
        {inGameMessages.map(message => (
          <p key={message} className="message-item">
            {message}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

MessageBox.defaultProps = {
  inGameMessages: []
};

MessageBox.propTypes = {
  inGameMessages: PropTypes.arrayOf(PropTypes.string)
};

export default MessageBox;
