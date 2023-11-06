export const getTicketById = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_BASE_URI}/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};