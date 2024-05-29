import React, { useEffect, useRef } from "react";

interface ModalDeleteProps {
  membuka: boolean;
  menutup: () => void;
  mengonfirmasi: () => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  membuka,
  menutup,
  mengonfirmasi,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        menutup();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && membuka) {
        menutup();
      }
    };

    const handleEnterKey = (event: KeyboardEvent) => {
      if (event.key === "Enter" && membuka) {
        mengonfirmasi();
      }
    };

    if (membuka) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("keydown", handleEnterKey);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("keydown", handleEnterKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("keydown", handleEnterKey);
    };
  }, [membuka, menutup, mengonfirmasi]);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === event.target) {
      menutup();
    }
  };

  return (
    <div
      ref={modalRef}
      className={`fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        membuka
          ? "opacity-100 duration-500"
          : "opacity-0 duration-500 pointer-events-none"
      }`}
      onClick={handleClickOutside}
    >
      <div className="bg-white p-6 rounded-lg">
        <p className="mb-4">Hapus list ini?</p>
        <div className="flex justify-between">
          <button
            onClick={menutup}
            className="px-4 py-2 bg-gray-300 rounded-md mr-2"
          >
            Batal
          </button>
          <button
            onClick={mengonfirmasi}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
