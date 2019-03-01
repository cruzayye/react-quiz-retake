import React from 'react';
import PropTypes from 'prop-types';

function Display({ first, second }) {
  return (
    <>
     <h1>{first}</h1>
     <h2>{second}</h2>
    </>
  );
}

Display.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.func.isRequired,

};

export default Display;
