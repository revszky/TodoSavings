import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  IconActivityHeartbeat,
  IconBox,
  IconChevronDown,
} from "@tabler/icons-react";
import DropdownInterface from "./DropdownInterface";

interface MenuNavProps {
  pilihMenu: () => void;
}

const Menu = ({ pilihMenu }: MenuNavProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const mengaturMenuKlik = () => {
    pilihMenu();
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <div className="flex items-start md:items-center flex-col md:flex-row justify-between w-full">
      <Link href="/" onClick={mengaturMenuKlik} className="hidden md:block">
        KYART
      </Link>

      <div
        ref={dropdownRef}
        className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4"
      >
        <button
          className="md:relative flex items-center"
          onClick={toggleDropdown}
        >
          <IconBox className="stroke-1 mr-2" />
          <p className="text-center">InterFace</p>
          <IconChevronDown className="w-4 h-4" />
        </button>

        <DropdownInterface
          isVisible={isDropdownVisible}
          pilihMenu={mengaturMenuKlik}
        />

        <Link
          href="/savings"
          className="flex items-center gap-2"
          onClick={mengaturMenuKlik}
        >
          <IconActivityHeartbeat className="stroke-1" />
          <p>Set Finances</p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
