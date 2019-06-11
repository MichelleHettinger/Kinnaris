import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const CalculationPanel = ({ elementsClicked, onPlusClick, onMinusClick, onElementClick }) => {
  let PID;
  const obj = {};

  //Map over every element based off of its parenId
  //Push the elements with the same parenId into their respective arrays within obj
  elementsClicked.map((element) => {
    PID = element.parenId;
    const parenID = `paren_${PID}`;

    if (obj[parenID]) {
      obj[parenID].push(element);
    } else {
      obj[parenID] = [];
      obj[parenID].push(element);
    }
    return true;
  });

  //Map over every array within obj.
  //Then return element buttons either with left, right or no parenthesis.
  const elements = Object.keys(obj).map((key) => {
    //console.log(obj[key])
    return obj[key].map((element, i) => {
      //console.log(obj[key].length)

      const multiplier = (multi) => {
        if (multi === 1) {
          return '';
        }
        return multi;
      };

      const clicked = (clickBool) => {
        if (clickBool) {
          return 'activeElement';
        }
        return 'inactiveElement';
      };

      const elemPlusClick = (
        <button
          className='p-m btn btn-xs btn-primary'
          onClick={ () => onPlusClick(element.id, element.mass) }
        >
          <p>+</p>
        </button>
      );

      const elemMinusClick = (
        <button
          className='p-m btn btn-xs btn-primary'
          onClick={ () => onMinusClick(element.id, element.multiplier, element.mass) }
        >
          <p>-</p>
        </button>
      );

      const elemNoParen = (
        <div className='elemNoParen elementSelected'>
          {elemPlusClick}
          <button
            className='elemNoParenButton'
            onClick={ () => onElementClick(element.id, element.clicked) }
          >
            <p className={ clicked(element.clicked) }>
              { element.acronym }
              <sub>
                { multiplier(element.multiplier) }
              </sub>
            </p>
          </button>
          {elemMinusClick}
        </div>
      );

      const leftParen = (
        <div className='leftParen'>
          <p>(</p>
        </div>
      );

      const elemInParen = (
        <div className='elemInParen elementSelected'>
          {elemPlusClick}
          <div className='elemInParenAcronym'>
            <p>
              { element.acronym }
              <sub>
                { multiplier(element.multiplier) }
              </sub>
            </p>
          </div>
          {elemMinusClick}
        </div>
      );

      const rightParen = (
        <div className='rightParenDiv'>
          <div className='rightParen'>
            <p>)</p>
          </div>

          <div className='rightParenPM'>
            <button
              className='pp-m btn btn-xs btn-primary'
            >
              <p>+</p>
            </button>

            <div className='parenMultiplier'>
              <p>1</p>
            </div>

            <button
              className='pp-m btn btn-xs btn-primary'
            >
              <p>-</p>
            </button>
          </div>
        </div>
      );

      //No parenthesis required
      if (element.parenId < 0) {
        return (
          <div
            className='calculatableElement'
            key={ shortid.generate() }
          >
            {elemNoParen}
          </div>
        );
      }
      //Parenthesis required

      //First element of parentheses
      if (i === 0) {
        return (
          <div
            className='calculatableElement'
            key={ shortid.generate() }
          >
            {leftParen}
            {elemInParen}
          </div>
        );
      //Last element of parentheses
      } else if (i === (obj[key].length - 1)) {
        return (
          <div
            className='calculatableElement'
            key={ shortid.generate() }
          >
            {elemInParen}
            {rightParen}
          </div>
        );
      }
      //Middle elements of parentheses
      return (
        <div
          className='calculatableElement'
          key={ shortid.generate() }
        >
          {elemInParen}
        </div>
      );
    });
  });

  //console.log(obj);

  return (
    <div id='calculationPanel' className='row'>
      <div id='calculationPanelElements'>
        {elements}
      </div>
    </div>
  );
};

CalculationPanel.propTypes = {
  elementsClicked: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    mass: PropTypes.number.isRequired,
    acronym: PropTypes.string.isRequired,
    multiplier: PropTypes.number.isRequired,
    parenId: PropTypes.number.isRequired,
    clicked: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onPlusClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired,
  onElementClick: PropTypes.func.isRequired,
};

export default CalculationPanel;
