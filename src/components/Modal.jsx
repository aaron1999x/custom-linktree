import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="bg-white rounded-lg p-6 max-w-md mx-auto z-20">
        <div className="flex justify-between">
          <h1 className="text-black text-xl font-bold">Share</h1>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;