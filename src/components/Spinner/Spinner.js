import React from 'react';
import './Spinner.css'

const Spinner = () => {
  return (
    <React.Fragment>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </React.Fragment>
  );
}

export default Spinner;
