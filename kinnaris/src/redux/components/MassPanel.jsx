import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

let newCompoundName = '';
const MassPanel = ({ molecularWeight, elementsClicked, isLogged, userID, userCompounds, loadUserCompound, clearCalcPanel, saveNewCompound, deleteOldCompound }) => {
  const currentElements = elementsClicked.map((element) => {
    if (element.multiplier === 1) {
      return (
        <p key={ shortid.generate() }>{element.acronym}</p>
      );
    }

    return (
      <p key={ shortid.generate() }>{element.acronym}<sub>{element.multiplier}</sub></p>
    );
  });

  const currentElementsObj = elementsClicked.map((element) => {
    return element;
  });

  const userSavedCompoundsMapped = userCompounds.map((compound) => {
    const compoundName = compound.chemicalName;
    const compoundTotal = compound.molecularWeight;
    const compoundFormula = compound.elements.map((elem) => {
      return elem;
    });

    const molecularFormula = compound.elements.map((elemente) => {
      const acronym = elemente.acronym;
      const multiplier = elemente.multiplier;

      if (multiplier === 1) {
        return (
          <p key={ shortid.generate() }>{acronym}</p>
        );
      }

      return (
        <p key={ shortid.generate() }>{acronym}<sub>{multiplier}</sub></p>
      );
    });

    return (
      <div key={ shortid.generate() } className='panel panel-default savedCompoundOuterDiv'>
        <div key={ shortid.generate() } className='col-sm-9'>
          <div key={ shortid.generate() }>
            <h4 key={ shortid.generate() }>{compoundName} - {compoundTotal} g/mol</h4>
          </div>
          <div className='savedFormula'>
            {molecularFormula}
          </div>
        </div>
        <div className='pull-right'>
          <input
            key={ shortid.generate() }
            type='button'
            value='Load'
            className='btn btn-sm btn-info'
            onClick={ () => { loadUserCompound(compoundName, compoundTotal, compoundFormula); } }
          />
          <input
            type='button'
            value='Delete'
            className='btn btn-sm btn-danger'
            onClick={ () => deleteOldCompound(userID, compoundName) }
          />
        </div>
      </div>
    );
  });

  const saveCompoundModal = (
    <div id='saveCompoundModal' className='modal fade'>
      <div id='saveCompoundModalDialog' className='modal-dialog' role='document'>
        <div id='saveCompoundModalContent' className='modal-content'>
          <div id='saveCompoundModalHeader' className='modal-header'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            ><span aria-hidden='true'>&times;</span>
            </button>
            <h3 className='modal-title'>Save Your Compound!</h3>
          </div>
          <div id='saveCompoundModalBody' className='modal-body'>
            <div id='saveCompoundModalTopRow' className='row' >
              <div className='col-sm-offset-2'>
                <div id='formInlineFormula' className='form-inline'>
                  <div className='form-group'>
                    <div id='formulaToSave'>
                      <div id='formulaToSaveLabelDiv'>
                        <p>Formula:</p>
                      </div>
                      {currentElements}
                    </div>
                  </div>
                </div>
                <div id='formInlineWeight' className='form-inline'>
                  <div className='form-group'>
                    <div id='weightToSave'>
                      <div id='weightToSaveLabelDiv'>
                        <p>Weight:</p>
                      </div>
                      <p>{molecularWeight} g/mol</p>
                    </div>
                  </div>
                </div>
                <div id='formInlineCompoundName' className='form-inline'>
                  <div id='formGroupCompoundName' className='form-group'>
                    <div>
                      <p>Name:</p>
                    </div>
                    <input
                      id='compoundNameInput'
                      type='text'
                      className='form-control input-md'
                      placeholder='Name'
                      ref={ (node) => {
                        newCompoundName = node;
                      } }
                    />
                    <input
                      id='saveCompoundButton'
                      type='button'
                      value='Save'
                      className='btn btn-success btn-sm'
                      onClick={ () => saveNewCompound(userID, {
                        chemicalName: newCompoundName.value,
                        molecularWeight,
                        elements: currentElementsObj,
                      }) }
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div id='saveCompoundModalBottomRow' className='row'>
              {userSavedCompoundsMapped}
            </div>
          </div>
          <div id='saveCompoundModalFooter' className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >Close</button>
          </div>
        </div>
      </div>
    </div>
  );

  let saveButton;

  if (isLogged === true) {
    saveButton = (
      <button
        id='massPanelSaveButton'
        type='button'
        data-toggle='modal'
        data-target='#saveCompoundModal'
        className='btn btn-success btn-sm'
      >Save</button>
    );
  } else {
    saveButton = (
      <button
        id='massPanelSaveButton'
        type='button'
        data-toggle='modal'
        data-target='#saveCompoundModal'
        className='btn btn-success btn-sm sr-only'
      >Save</button>
    );
  }

  return (
    <div id='massPanel' className='row'>
      <div id='massPanelMolecularWeight' className='col-sm-9'>
        <h3>
          <span>Molecular Weight: </span>
          <span>{molecularWeight.toFixed(3)} </span>
          <span>g/mol</span>
        </h3>
      </div>
      <div id='massPanelButtonsDiv' className='pull-right'>
        {saveButton}
        <button
          id='massPanelClearButton'
          type='button'
          className='btn btn-sm btn-secondary'
          onClick={ () => clearCalcPanel() }
        >Clear</button>
      </div>
      {saveCompoundModal}
    </div>
  );
};

MassPanel.propTypes = {
  molecularWeight: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired,
  userID: PropTypes.string.isRequired,
  elementsClicked: PropTypes.arrayOf(PropTypes.shape({
    mass: PropTypes.number.isRequired,
    acronym: PropTypes.string.isRequired,
    multiplier: PropTypes.number.isRequired,
    parenId: PropTypes.number.isRequired,
    clicked: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  userCompounds: PropTypes.arrayOf(PropTypes.shape({
    chemicalName: PropTypes.string.isRequired,
    elements: PropTypes.arrayOf(PropTypes.shape({
      mass: PropTypes.number.isRequired,
      acronym: PropTypes.string.isRequired,
      multiplier: PropTypes.number.isRequired,
      parenId: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  }).isRequired).isRequired,
  loadUserCompound: PropTypes.func.isRequired,
  clearCalcPanel: PropTypes.func.isRequired,
  saveNewCompound: PropTypes.func.isRequired,
  deleteOldCompound: PropTypes.func.isRequired,
};

export default MassPanel;
