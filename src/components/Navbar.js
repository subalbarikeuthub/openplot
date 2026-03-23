"use client";

import { FaUser } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div
      style={{ height: "78px", alignItems: "center" }}
      className="flex bg-white justify-between px-5"
    >
      <div className="mx-5">
        <img
          className="logo3d"
          src="https://www.openplot.com/static/media/logo.c6d7c97c561e57c1c564.webp"
          height={90}
          width={180}
        />
      </div>

      <div className="flex gap-5 items-center">

        <div className="borderBox">

          <div className="innerBox font-serif flex items-center gap-2 text-black font-stretch-90%">

            Post Property

            <span className="bg-red-600 text-white px-2 rounded animate-moveFree">
              Free
            </span>

          </div>

        </div>


        <div className="bg-blue-500 font-serif text-white px-4 py-2 rounded-xl flex items-center gap-2">
          <FaUser size={15} />
          Signup / Login
        </div>

      </div>
    </div>
  );
}