import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-4 text-center">
        <h1 className="text-6xl">Manage your income quickly,</h1>

        <h2 className="text-6xl">modernly and more efficiently.</h2>
      </div>

      <div className="p-4 text-center max-w-2xl">
        <p>
          Recording income, setting spending targets, and compiling your
          shopping list becomes easier and more efficient, allowing you to
          better manage your day-to-day finances.
        </p>
      </div>

      <Link
        href="/set-savings"
        className="py-2 px-4 border border-black hover:duration-500 hover:bg-black rounded-xl hover:text-white"
      >
        get started
      </Link>
    </div>
  );
};

export default Hero;
