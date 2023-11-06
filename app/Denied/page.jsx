import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

const Denied = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-red-500 font-semibold text-2xl">Access Denied</h4>
        <h4>You are not a admin</h4>
        <div className="my-20">
          <Link
            href={"/"}
            className="hover:underline flex space-x-2 items-center"
          >
            <FaHome /> <span>home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Denied;
