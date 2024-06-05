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

const iconData = [
  {
    id: 1,
    icon: <IconWallet className="w-14 h-14 stroke-1" />,
    title: "Fill your wallet",
  },
  {
    id: 2,
    icon: <IconStairs className="w-14 h-14 stroke-1 rotate-45" />,
    title: "Set your spending target",
  },
  {
    id: 3,
    icon: <IconListDetails className="w-14 h-14 stroke-1" />,
    title: "Make a detailed list of expenses",
  },
  {
    id: 4,
    icon: <IconTrendingUp className="w-14 h-14 stroke-1" />,
    title: "Results of all total expenses",
  },
];

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="p-4 text-center font-extrabold">
        <h1 className="text-4xl lg:text-6xl">Manage your income quickly,</h1>
        <h2 className="text-4xl lg:text-6xl">modernly and more efficiently.</h2>
      </div>

      <div className="p-4 text-center max-w-2xl">
        <p className="text-sm md:text-xl">
          Recording income, setting spending targets, and compiling your
          shopping list becomes easier and more efficient, allowing you to
          better manage your day-to-day finances.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <IconActivityHeartbeat className="w-full md:w-40 h-32 stroke-[0.1]" />
        <Link
          href="/set-savings"
          className="py-2 px-4 border border-black hover:duration-500 hover:bg-black rounded-xl hover:text-white text-center"
        >
          Get started
        </Link>
        <IconActivity className="w-full md:w-40 h-32 stroke-[0.1]" />
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 2xlgap-10">
        {iconData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center p-4"
          >
            <div className="p-2">{item.icon}</div>
            <div className="p-2 text-center">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
