import React, { useState } from 'react';

const Modal: React.FC<{ show: boolean; onClose: () => void; videoUrl: string }> = ({ show, onClose, videoUrl }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg w-3/4 max-w-3xl">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-black text-2xl font-bold">&times;</button>
        </div>
        <div className="mt-4">
          <video controls src={videoUrl} className="w-full rounded" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
