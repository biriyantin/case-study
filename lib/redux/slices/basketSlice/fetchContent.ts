export const fetchContent = async (): Promise<{ data: string }> => {
  const response = await fetch("https://62f9ee323c4f110faa8ed350.mockapi.io/api/payment", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();

  return result;
};
