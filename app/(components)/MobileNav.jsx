"use client";
import { GiCrossedBones } from "react-icons/gi";
import React, { useState } from "react";
import { Fa500Px, FaHamburger } from "react-icons/fa";

const MobileNav = ({ navlink }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="md:hidden fixed z-10 right-2"
    >
      <FaHamburger onClick={() => setOpen(!open)} size={26} />
      {open && (
        <div className="bg-page mt-72 flex flex-col space-y-4 px-16 py-4 rounded shadow">
          <div className="flex justify-end pb-2 border-b">
            <GiCrossedBones onClick={() => setOpen(!open)} size={26} />
          </div>
          {navlink}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
