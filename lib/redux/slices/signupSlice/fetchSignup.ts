export const fetchSignup = async (payload: object): Promise<{ data: object }> => {
  const response = await fetch("https://62f9ee323c4f110faa8ed350.mockapi.io/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ payload }),
  });
  const result = await response.json();

  return result;
};
