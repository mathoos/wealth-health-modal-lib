import React from 'react'
import styles from './index.css'

const Modal = ({ show, handleClose, txt }) => {
  if (!show) {
    return null
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.close} onClick={handleClose} />
        <div className={styles.txt}>
          <p>{txt}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
