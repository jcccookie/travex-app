import React from 'react';
import Modal from 'react-modal';

const RemoveModal = (props) => (
   <Modal
      isOpen={props.isRemoveClicked}
      onRequestClose={props.onClearModal}
      closeTimeoutMS={200}
      contentLabel='Remove Modal'
      ariaHideApp={false}
      className='modal'
   >
      <h3 className='modal__title'>Are you sure?</h3>
      <div className='button-list button-list--modal'>
         <button className='button button--remove' onClick={props.onRemoveOnModal}>Remove</button>
         <button className='button button--cancel' onClick={props.onClearModal}>Cancel</button>
      </div>
      
   </Modal>
);

export default RemoveModal;