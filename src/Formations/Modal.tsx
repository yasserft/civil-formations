import React from 'react';
import CheckoutForm from './CheckoutForm';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  videoUrl: string;
  name: string;
  description: string;
  duree: string;
  price: number;
  pay: boolean;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, videoUrl, name, description, duree, price, pay }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg w-3/4 max-w-3xl">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-black text-2xl font-bold">&times;</button>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="mb-4">{description}</p>
          <p><strong>Duree:</strong> {duree}</p>
          <p><strong>Prix:</strong> {price.toFixed(2)} DH</p>
          <video controls src={videoUrl} className="w-full rounded mt-4 mb-4" />
          {pay ? <CheckoutForm amount={price} /> : <p className="text-green-500">Free</p>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
