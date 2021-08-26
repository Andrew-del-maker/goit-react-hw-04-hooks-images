import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import './modal.scss'

const modalRoot = document.querySelector('#modal-root');
function Modal({ onClose, children }) {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)

        };
    });

    const handleKeyDown = e => {
         if (e.code === 'Escape') {
                onClose();
         }
    }
    const onOverlayClick = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }
   
        return createPortal (
            <div className="Overlay" onClick={onOverlayClick}>
             <div className="Modal">
                {children}
             </div>
            </div>, modalRoot

        )
    
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
}
export default Modal;