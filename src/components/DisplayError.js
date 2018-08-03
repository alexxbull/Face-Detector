import React from 'react'
import '../styles/DisplayError.css'

const DisplayError = ({ errorMessage, showError }) => {
  return (
    <div>
      {showError && <div className="error-message">{`${errorMessage}`}</div>}
    </div>
  );
};

export default DisplayError;
