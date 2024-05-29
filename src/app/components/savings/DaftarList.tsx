import React from "react";
import { IconPencil, IconTrash } from "@tabler/icons-react";

interface DaftarListProps {
  daftarPengeluaran: { nama: string; nominal: string }[];
  btnBukaListModal: () => void;
  btnModalList: (index: number) => void;
  btnModalDelete: (index: number) => void;
  disabled: boolean;
}

const capitalizeFirstLetter = (text: string) => {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
};

const DaftarList: React.FC<DaftarListProps> = ({
  daftarPengeluaran,
  btnBukaListModal,
  btnModalList,
  btnModalDelete,
  disabled,
}) => {
  return (
    <div
      className={`max-w-[300px] md:max-w-[400px] w-full flex flex-col items-center justify-center my-10 md:my-0 ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="p-2">
          <p className="text-2xl font-semibold">Expense records</p>
        </div>

        <button
          onClick={btnBukaListModal}
          className={`py-2 px-4 ${
            disabled ? "bg-gray-400 cursor-not-allowed" : "bg-black"
          }`}
          disabled={disabled}
        >
          <p className="text-white font-semibold">Add transaction</p>
        </button>
      </div>

      <div className="w-full p-2 opacity-50">
        {daftarPengeluaran.length === 0 && (
          <div className="w-full flex items-center justify-between mt-2 p-2 border border-black rounded-2xl">
            <div className="px-2">
              <p className="text-xl font-semibold">Example</p>
              <p className="text-sm">Rp 0</p>
            </div>

            <div className="flex items-center justify-center gap-1">
              <div className="flex items-center justify-center px-1">
                <IconPencil className="w-6 h-6" />
              </div>

              <div className="flex items-center justify-center px-1">
                <IconTrash className="w-6 h-6" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-full">
        <div className="overflow-y-auto max-h-[calc(100px*1)] md:max-h-[calc(100px*4)] p-2">
          {daftarPengeluaran.map((item, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between mt-2 p-2 border border-black rounded-2xl"
            >
              <div className="px-2">
                <p className="text-xl font-semibold">
                  {capitalizeFirstLetter(item.nama)}
                </p>
                <p className="text-sm">Rp {item.nominal}</p>
              </div>

              <div className="flex items-center justify-center gap-1">
                <button
                  onClick={() => btnModalList(index)}
                  className="flex items-center justify-center px-1"
                >
                  <IconPencil className="w-6 h-6" />
                </button>

                <button
                  onClick={() => btnModalDelete(index)}
                  className="flex items-center justify-center px-1"
                >
                  <IconTrash className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DaftarList;
