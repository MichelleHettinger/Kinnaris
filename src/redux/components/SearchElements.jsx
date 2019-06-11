import React from 'react';
import PropTypes from 'prop-types';

let input;
const SearchElements = ({ onKeyboardInput }) => (
  <div id='searchElementsRow' className='row'>
    <form
      id='searchElementsForm'
      onChange={ (e) => {
          //Prevent form submission and subsequent page reload when hitting enter/return
        e.preventDefault();

          //Dispatch an action from the action creator with the value of the input
        onKeyboardInput(input.value);
      } }
    >
      <input
        id='searchElementsInput'
        className='form-control input-md'
        ref={ (node) => {
            //Node refers to this specific element (this input element)
          input = node;
        } }
      />
    </form>
  </div>
);

SearchElements.propTypes = {
  onKeyboardInput: PropTypes.func.isRequired,
};

export default SearchElements;
