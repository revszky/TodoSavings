import React from "react";
import { IconActivity } from "@tabler/icons-react";

interface TotalPengeluaranProps {
  totalPengeluaran: string;
  formatRupiah: (angka: string) => string;
}

const TotalPengeluaran: React.FC<TotalPengeluaranProps> = ({
  totalPengeluaran,
  formatRupiah,
}) => {
  return (
    <div className="w-full flex items-center justify-center p-2 border border-black relative group">
      <div className="p-2">
        <IconActivity className="w-14 h-14 stroke-[0.4] text-red-500" />
      </div>

      <div className="p-2 text-center">
        <h1 className="text-xl font-semibold">Expenditure</h1>
        <p className="text-sm md:text-base">
          Rp {formatRupiah(totalPengeluaran)}
        </p>
      </div>
    </div>
  );
};

export default TotalPengeluaran;
