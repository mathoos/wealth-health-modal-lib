import React from 'react'
import './index.css'

const Modal = ({ show, handleClose, txt }) => {
  if (!show) {
    return null
  }

  return (
    <div className='modal'>
      <div className='modal_content'>
        <div className='modal_content-close' onClick={handleClose} />
        <div className='modal_content-txt'>
          <p>{txt}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
