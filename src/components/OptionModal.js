import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!! props.selectedOption}
    onRequestClose={props.handleDeletePick}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleDeletePick}>Okay</button>
  </Modal>
);


export default OptionModal;

//create a new event handler in IA that clears the selectedOption state
//pass that into OptionModal
//Call it on button click
