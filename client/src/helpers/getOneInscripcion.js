export const getOneInscripcion = async (id) => {
  const miURL = `http://localhost:5000/inscripcion/${id}`;
  const resp = await fetch(miURL);
  const data = await resp.json();

  return data;
};
