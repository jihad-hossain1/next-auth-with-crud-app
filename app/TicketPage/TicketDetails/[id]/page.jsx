import { getTicketById } from "@/utils/getItemById";

const TicketDetails = async ({ params }) => {
  const { id } = params;
  const { foundTicket } = await getTicketById(id);
  // console.log(data);
  return (
    <div className="max-w-screen-2xl px-2 mx-auto">
      <p>TicketDetailsID: {foundTicket?._id}</p>
      <p>foundTicket: {foundTicket?.name}</p>
    </div>
  );
};

export default TicketDetails;
