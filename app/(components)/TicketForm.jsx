"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const TicketForm = ({ ticket }) => {
  // console.log("ticket form", ticket);
  const EDITMODE = ticket?._id === "new" ? false : true;
  const router = useRouter();
  const startingTicketData = {
    name: "",
    details: "",
    priority: 1,
    email: "abc@gmail.com",
    category: "Hardware Problem",
  };
  if (EDITMODE) {
    startingTicketData["name"] = ticket?.name;
    startingTicketData["details"] = ticket?.details;
    startingTicketData["priority"] = ticket?.priority;
    startingTicketData["email"] = ticket?.email;
    startingTicketData["category"] = ticket?.category;
  }
  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket?._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
    }
    router.refresh();
    router.push("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className="text-xl py-4 text-center">
          {EDITMODE ? "Update Your Ticket" : "Create New Ticket"}
        </h3>
        <div className="max-w-[500px] mx-auto flex flex-col gap-3">
          <label htmlFor="">name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required={true}
            value={formData.name}
            className="inpt"
            id=""
          />
          <label htmlFor="">email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required={true}
            value={formData.email}
            className="inpt"
            id=""
          />
          <label htmlFor="">category</label>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            required={true}
            value={formData.category}
            className="inpt"
            id=""
          />
          <label htmlFor="">details</label>
          <textarea
            type="text"
            name="details"
            onChange={handleChange}
            required={true}
            value={formData.details}
            className="inpt"
            id=""
          />
          <label htmlFor="">Priority</label>
          <input
            type="number"
            name="priority"
            onChange={handleChange}
            required={true}
            value={formData.priority}
            className="inpt"
            id=""
          />
          <input
            type="submit"
            value={EDITMODE ? "Update Ticket" : "Create Ticket"}
            className="inpt btn"
            id=""
          />
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
