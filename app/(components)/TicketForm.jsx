"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const TicketForm = () => {
  const router = useRouter();
  const startingTicketData = {
    name: "",
    details: "",
    priority: 1,
    email: "abc@gmail.com",
    category: "Hardware Problem",
  };

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
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      //@ts-ignore
      "Content-Type": "application/json",
    });
    if (!res.ok) {
      throw new Error("Failed to create ticket");
    }
    router.refresh();
    router.push("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4 className="text-xl py-6 text-center">Create Your Ticket</h4>
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
          <input type="submit" className="inpt btn" id="" />
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
