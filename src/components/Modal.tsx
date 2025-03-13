import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import closeIcon from "../assets/img/close.svg"
import { motion } from 'framer-motion';



interface ModalProps {
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(({ className = '', children, onClose }, ref) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
    close() {
      if (dialog.current) {
        dialog.current.close();
      }
    }
  }));

  const handleClose = () => {
    if (onClose) onClose();
    if (dialog.current) dialog.current.click();
  };

  return createPortal(
    <dialog ref={dialog} className={`${className} backdrop:bg-gray-900/80 fixed top-1/2 w-[90%] max-w-screen-md tracking-widest -translate-1/2 left-1/2 p-10 md:p-15 bg-gray-50 dark:bg-gray-950 dark:text-slate-100  rounded-xl shadow-lg shadow-gray-900`}>
      {children}
      <form method='dialog' className='absolute right-4 top-4 flex justify-end'>
        <motion.button
        initial={{ x: 0, y: 0}}
        whileHover={{ x: -2, y: 2}}
        whileTap={{scale: 0.9}}
          onClick={handleClose}
          className='p-2 z-50 border rounded-full cursor-pointer border-slate-600'
        >
          <img src={closeIcon} alt='Close Modal' className='w-4 h-4 invert dark:invert-0' />
        </motion.button>
      </form>
    </dialog>,
    document.getElementById('modal-root') as HTMLElement
  );
});

export default Modal;