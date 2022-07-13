import { useFetchOne } from '../hooks/useFetch';
import { useFetchInscripcion } from '../hooks/useFetchInscripcion';

export const Historial = () => {
  let id = '62cd8a6eb36f3b491184c9e0';
  const usuario = useFetchOne(id);

  let inscripcionID = '62ceba4b5b2828ee1c47095c';
  const inscripcion = useFetchInscripcion(inscripcionID);

  console.log(usuario);
  return (
    <div>
      <h1>Historial</h1>
      {JSON.stringify(usuario)}
      <hr />
      {JSON.stringify(usuario.inscripcion)}
      <hr />
      {JSON.stringify(inscripcion)}
    </div>
  );
};
