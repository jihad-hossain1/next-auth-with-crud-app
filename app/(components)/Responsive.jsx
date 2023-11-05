"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Responsive = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "CreateUser", link: "/CreateUser" },
    { name: "Client", link: "/Client" },
    { name: "Member", link: "/Member" },
    { name: "Public", link: "/Public" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full sticky top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <Link href={"/"} className="text-3xl text-indigo-600 mr-1 pt-2">
            <FaHamburger />
          </Link>
          Auth with crud
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <RxHamburgerMenu name={open ? "close" : "menu"}></RxHamburgerMenu>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <h4>Get Started</h4>
        </ul>
      </div>
    </div>
  );
};

export default Responsive;
