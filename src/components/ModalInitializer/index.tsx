'use client'
import { useEffect } from 'react';
import Modal from 'react-modal';

export default function ModalInitializer() {
  useEffect(() => {
    Modal.setAppElement('#__next'); 
  }, []);

  return null;
}