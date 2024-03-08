import React from 'react'
import styles from './index.css'

const Modal = ({ show, handleClose, content }) => {
  if (!show) {
    return null
  }

  return (
    <div className={styles.modal} data-testid='modal'>
      <div className={styles.modal_content}>
        <button
          className={styles.close}
          data-testid='close-button'
          onClick={handleClose}
        />
        <div className={styles.txt}>{content}</div>
      </div>
    </div>
  )
}

export default Modal
