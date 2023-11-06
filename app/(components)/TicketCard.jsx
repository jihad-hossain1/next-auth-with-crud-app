import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

import Link from "next/link";
import { BsPencilSquare, BsFillEyeFill } from "react-icons/bs";
import DeleteTicket from "./DeleteTicket";

const TicketCard = async ({ ticket }) => {
  const session = await getServerSession(options);
  return (
    <div className=" p-5 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.25)] flex flex-col gap-4">
      <Link href={`#`} className="text-xl font-bold">
        name: {ticket?.name}
      </Link>
      <p>email: {ticket?.email} </p>
      <div className="flex gap-4 items-center">
        {session?.user && (
          <>
            <DeleteTicket id={ticket?._id} />
            <Link href={`/TicketPage/UpdateTicket/${ticket?._id}`}>
              <BsPencilSquare className="text-xl" />
            </Link>
          </>
        )}
        <Link href={`TicketPage/TicketDetails/${ticket?._id}`}>
          <BsFillEyeFill className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default TicketCard;
