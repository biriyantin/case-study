export const fetchProducts = async (): Promise<{ data: object[] }> => {
  const response = await fetch("https://62f9ee323c4f110faa8ed350.mockapi.io/api/packages", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();

  return result;
};
