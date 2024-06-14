"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Menu from "./Menu";

const Navbar = () => {
  const [bukaMenu, mengaturBukaMenu] = useState(false);
  const [animasiPutar, mengaturAnimasiPutar] = useState(false);

  const toggleMenu = () => {
    mengaturBukaMenu(!bukaMenu);
    mengaturAnimasiPutar(!animasiPutar);
  };

  const closeMenu = () => {
    mengaturBukaMenu(false);
    mengaturAnimasiPutar(false);
  };

  useEffect(() => {
    const mengubahUkuran = () => {
      if (window.innerWidth > 768 && bukaMenu) {
        closeMenu();
      }
    };

    const klikEsc = (klik: { keyCode: number }) => {
      if (klik.keyCode === 27 && bukaMenu) {
        mengaturBukaMenu(false);
        mengaturAnimasiPutar(false);
      }
    };

    window.addEventListener("resize", mengubahUkuran);
    document.addEventListener("keydown", klikEsc);

    return () => {
      window.removeEventListener("resize", mengubahUkuran);
      document.addEventListener("keydown", klikEsc);
    };
  }, [bukaMenu]);

  const sidebarClass = `fixed flex flex-col top-0 left-0 w-56 md:w-[500px] h-full bg-white p-4 transform transition-transform duration-500 ease-in-out z-50${
    bukaMenu ? " translate-x-0" : " -translate-x-full"
  }`;

  return (
    <header className="p-4 sticky top-0 left-0 right-0 z-10 bg-white">
      <div className="hidden md:block">
        <div>
          <Menu pilihMenu={closeMenu} />
        </div>
      </div>

      <div className="block md:hidden">
        <div className="flex items-center justify-between">
          <Link href="/">
            <p className="text-2xl font-ketiga font-extrabold">KYART</p>
          </Link>

          <div>
            <button
              onClick={toggleMenu}
              className={`transform ${
                animasiPutar ? "rotate-180" : ""
              } transition duration-300`}
            >
              {bukaMenu ? <IconX /> : <IconMenu2 />}
            </button>
          </div>
        </div>
      </div>

      {bukaMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40"
          onClick={toggleMenu}
        />
      )}

      <div className={sidebarClass}>
        <div className="flex min-h-screen py-4">
          <Menu pilihMenu={closeMenu} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
