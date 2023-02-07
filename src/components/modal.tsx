import { useState } from "react";
import { Dialog } from "@headlessui/react";

interface Props {
  isOpen?: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen = false, onClose = () => {} }: Props) => {
  return (
    <Dialog open={isOpen} onClose={() => onClose} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-4">
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p className="my-2">Should scroll 👇</p>

          <p className="h-12 overflow-y-scroll">
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>
          <button
            className="bg-indigo-500 text-bold text-white p-2"
            onClick={onClose}
          >
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
