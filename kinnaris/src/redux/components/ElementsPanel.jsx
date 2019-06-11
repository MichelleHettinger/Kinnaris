import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const ElementsPanel = ({ elementsFound, onElementClick }) => (

  <div id='elementsPanelRow' className='row'>
    {
      elementsFound.map((element) => {
        return (
          <button
            className='elementFoundButton col-sm-4'
            key={ shortid.generate() }
            onClick={ () => onElementClick(element) }
          >
            <p className='elementFoundAtomicP'>{element.atomicNumber}</p>
            <h2>{element.acronym}</h2>
            <p className='elementFoundNameP'>{element.name}</p>
            <p className='elementFoundMassP'>{element.mass.toFixed(3)}</p>
          </button>
        );
      })
    }
  </div>
);

ElementsPanel.propTypes = {
  elementsFound: PropTypes.arrayOf(PropTypes.shape({
    mass: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    acronym: PropTypes.string.isRequired,
    atomicNumber: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onElementClick: PropTypes.func.isRequired,
};

export default ElementsPanel;
