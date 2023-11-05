import { getServerSession } from "next-auth";
import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);

  const navlink = (
    <>
      <Link href="/">Home</Link>
      <Link href="/CreateUser">Create User</Link>
      <Link href="/Client">Client Member</Link>
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
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>My Site</div>
        <div className="flex md:text-lg text-xs gap-3 md:gap-10">{navlink}</div>
      </nav>
    </header>
  );
};

export default Nav;
