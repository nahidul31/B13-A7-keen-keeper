"use client";

import Link from "next/link";
import React from "react";
import { House, ClockCheck, ChartLine, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  const closeDrawer = () => {
    const checkbox = document.getElementById("my-drawer");
    if (checkbox) checkbox.checked = false;
  };

  const links = (
    <>
      <li>
        <Link
          onClick={closeDrawer}
          href="/"
          className={`flex items-center gap-2 px-3 py-2 rounded ${
            pathname === "/" ? "bg-[#1a3d30] text-white" : ""
          }`}
        >
          <House className="w-5 h-5" />
          Home
        </Link>
      </li>

      <li>
        <Link
          onClick={closeDrawer}
          href="/time-line"
          className={`flex items-center gap-2 px-3 py-2 rounded ${
            pathname === "/time-line" ? "bg-[#1a3d30] text-white" : ""
          }`}
        >
          <ClockCheck className="w-5 h-5" />
          Time line
        </Link>
      </li>

      <li>
        <Link
          onClick={closeDrawer}
          href="/stats"
          className={`flex items-center gap-2 px-3 py-2 rounded ${
            pathname === "/stats" ? "bg-[#1a3d30] text-white" : ""
          }`}
        >
          <ChartLine className="w-5 h-5" />
          Stats
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src="/img/logo.png" alt="logo" width={150} height={100} />
        </Link>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{links}</ul>
      </div>

      <div className="lg:hidden">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn btn-ghost">
              <Menu className="w-6 h-6" />
            </label>
          </div>

          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>

            <ul className="menu p-4 w-64 min-h-full bg-base-200 space-y-3">
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
