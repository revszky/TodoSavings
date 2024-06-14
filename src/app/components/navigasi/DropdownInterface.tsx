import Link from "next/link";
import React from "react";

interface DropdownInterfaceProps {
  isVisible: boolean;
  pilihMenu: () => void;
}

const DropdownInterface = ({
  isVisible,
  pilihMenu,
}: DropdownInterfaceProps) => {
  if (!isVisible) {
    return null;
  }

  const mengaturMenuKlik = () => {
    pilihMenu();
  };

  return (
    <div className="md:absolute top-full bg-white shadow-lg rounded-md py-2 w-48">
      <Link
        href="/blank"
        className="px-4 py-2 text-gray-800 hover:bg-gray-100"
        onClick={mengaturMenuKlik}
      >
        Blank Page
      </Link>
    </div>
  );
};

export default DropdownInterface;
