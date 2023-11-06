import { getServerSession } from "next-auth";
import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";
import { FaTicketAlt } from "react-icons/fa";
import MobileNav from "./MobileNav";

const Nav = async () => {
  const session = await getServerSession(options);

  const navlink = (
    <>
      <Link href="/">Home</Link>
      {session?.user?.role === "admin" ? (
        <Link href="/CreateUser">Create </Link>
      ) : null}
      <Link href="/Client">Client </Link>
      <Link href="/TicketPage/new" className="flex items-center space-x-2">
        <FaTicketAlt /> <span>Ticket</span>
      </Link>
      <Link href="/Member">Member</Link>
      <Link href="/Public">Public</Link>
      {session ? (
        <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
      ) : (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </>
  );
  return (
    <header className="sticky z-10 top-0 bg-gray-600 text-gray-100">
      <div className="max-w-screen-2xl mx-auto">
        <nav className="flex justify-between items-center w-full px-10 py-4">
          <div>
            <Link href={"/"}>Dev. Jihad</Link>
          </div>
          <div className="hidden md:flex md:text-lg text-xs gap-3 md:gap-10">
            {navlink}
          </div>
          <MobileNav navlink={navlink} />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
