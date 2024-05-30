"use client";

import React, { useState } from "react";
import {
  IconActivity,
  IconActivityHeartbeat,
  IconListDetails,
  IconStairs,
  IconTrendingUp,
  IconWallet,
} from "@tabler/icons-react";
import Link from "next/link";
import Explanation from "./Explanation";

const iconData = [
  {
    id: 1,
    icon: <IconWallet className="w-14 h-14 stroke-1" />,
    title: "Fill your wallet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe totam facilis minus maiores tempore suscipit excepturi consequuntur ratione pariatur in.",
  },
  {
    id: 2,
    icon: <IconStairs className="w-14 h-14 stroke-1 rotate-45" />,
    title: "Set your spending target",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe totam facilis minus maiores tempore suscipit excepturi consequuntur ratione pariatur in.",
  },
  {
    id: 3,
    icon: <IconListDetails className="w-14 h-14 stroke-1" />,
    title: "Make a detailed list of expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe totam facilis minus maiores tempore suscipit excepturi consequuntur ratione pariatur in.",
  },
  {
    id: 4,
    icon: <IconTrendingUp className="w-14 h-14 stroke-1" />,
    title: "Results of all total expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe totam facilis minus maiores tempore suscipit excepturi consequuntur ratione pariatur in.",
  },
];

const Hero = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="p-4 text-center font-extrabold">
        <h1 className="text-6xl">Manage your income quickly,</h1>
        <h2 className="text-6xl">modernly and more efficiently.</h2>
      </div>

      <div className="p-4 text-center max-w-2xl">
        <p className="text-xl">
          Recording income, setting spending targets, and compiling your
          shopping list becomes easier and more efficient, allowing you to
          better manage your day-to-day finances.
        </p>
      </div>

      <div className="flex items-center justify-center mb-20">
        <IconActivityHeartbeat className="w-40 h-32 stroke-[0.1]" />
        <Link
          href="/set-savings"
          className="py-2 px-4 border border-black hover:duration-500 hover:bg-black rounded-xl hover:text-white"
        >
          Get started
        </Link>
        <IconActivity className="w-40 h-32 stroke-[0.1]" />
      </div>

      <Explanation
        iconData={iconData}
        activeId={activeId}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default Hero;
