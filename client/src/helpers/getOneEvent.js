export const getOneEvent = async (id) => {
  const miURL = `http://localhost:5000/user/${id}`;
  const resp = await fetch(miURL);
  const data = await resp.json();

  return data;
};
