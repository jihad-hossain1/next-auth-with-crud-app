import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  try {
    const res = await fetch(
      `https://next-auth-with-crud-app.vercel.app/api/Tickets/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

let updateTicketData = {};
const UpdateTicketPage = async ({ params }) => {
  const { id } = params;
  const { foundTicket } = await getTicketById(id);
  console.log(foundTicket);
  const EDITMODE = id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(id);
    console.log(updateTicketData);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return (
    <div>
      <TicketForm ticket={foundTicket} />
    </div>
  );
};

export default UpdateTicketPage;
