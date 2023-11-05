import Link from "next/link";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { BsPencilSquare, BsFillEyeFill } from "react-icons/bs";

const TicketCard = ({ ticket }) => {
  return (
    <div className="p-5 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.25)] flex flex-col gap-4">
      <Link href={`#`} className="text-xl font-bold">
        name: {ticket?.name}
      </Link>
      <p>email: {ticket?.email} </p>
      <div className="flex gap-4 items-center">
        <FaTrashRestoreAlt className="text-xl" />
        <BsPencilSquare className="text-xl" />
        <BsFillEyeFill className="text-xl" />
      </div>
    </div>
  );
};

export default TicketCard;
