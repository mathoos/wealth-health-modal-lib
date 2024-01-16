import React from 'react'
import PropTypes from 'prop-types'
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

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired
}

export default Modal
