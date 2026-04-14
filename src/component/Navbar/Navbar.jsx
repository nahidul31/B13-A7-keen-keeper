"use client";
import Link from "next/link";
import React from "react";
import { House, ClockCheck, ChartLine } from "lucide-react";
import { usePathname } from "next/navigation";
// import logo from "/img/logo.png";
import Image from "next/image";
const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`flex items-center gap-2 px-3 py-2 rounded ${
            pathname === "/" ? "bg-[#1a3d30] text-white" : ""
          }`}
        >
          <House className="w-5 h-5" />
          <span>Home</span>
        </Link>
      </li>

      <li>
        <Link
          href="/time-line"
          className={`px-3 py-2 rounded ${
            pathname === "/time-line" ? "bg-[#1a3d30] text-white" : ""
          }`}
        >
          <ClockCheck className="w-5 h-5" />
          <span>Time line</span>
        </Link>
      </li>

      <li>
        <Link
          href="/stats"
          className={`px-3 py-2 rounded ${
            pathname === "/stats" ? "bg-[#1a3d30] text-white" : ""
          }`}
        >
          <ChartLine className="w-5 h-5" />
          <span>Stats</span>
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={150}
              height={100}
              className="rounded"
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
