"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaTrashRestoreAlt } from "react-icons/fa";

const DeleteTicket = ({ id }) => {
  const router = useRouter();
  const deleteTicket = async (tID) => {
    const res = await fetch(`/api/Tickets/${tID}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <button onClick={() => deleteTicket(id)}>
      <FaTrashRestoreAlt className="text-xl" />
    </button>
  );
};

export default DeleteTicket;
