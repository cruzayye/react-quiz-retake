import React from 'react';
import PropTypes from 'prop-types';


function Controls({ name, onChange }) {
  return (
    <>
    <input type= 'text' name={name} onChange={onChange} />

    </>
  );
}

Controls.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

};

export default Controls;
