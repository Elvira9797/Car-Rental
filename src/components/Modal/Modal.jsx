import { Box, Overlay, CloseButton } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';
import clsx from 'clsx';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, children }) {
  const [isVisible, setIsVisible] = useState(true);

  const closeModal = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const closeModalByEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', closeModalByEsc);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', closeModalByEsc);
    };
  }, [closeModal]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay
      color="white"
      backgroundOpacity={0.35}
      blur={3}
      center
      fixed
      onMouseDown={handleOverlayClick}
      className={clsx(css.overlay, isVisible && css.active)}
    >
      <Box className={clsx(css.modal, !isVisible && css.closing)}>
        <CloseButton classNames={{ root: css.closeBtn }} onClick={closeModal} />
        {children}
      </Box>
    </Overlay>,
    modalRoot
  );
}

export default Modal;
