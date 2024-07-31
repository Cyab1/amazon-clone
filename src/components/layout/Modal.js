import React from 'react'

const Modal = ({setIsOpen}) => {
  return (
    <>
      <div className='modal-div' onClick={() => setIsOpen(false)}>
        <div style={modalStyle}>
            <h3>test Modal</h3>
            <button onClick={() => setIsOpen(false)}>Close</button>
            <p>this is modal</p>
        </div>
      </div>
    </>
  )
};

const modalStyle = {
    position: "Fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    background: "white",
    borderRadius: "24px",
    boxShadow: 24,
    Padding: "10px",
    textAlign: "Center",
}

export default Modal;
