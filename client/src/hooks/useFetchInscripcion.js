import { useEffect, useState } from 'react';
import { getOneInscripcion } from '../helpers/getOneInscripcion';

export const useFetchInscripcion = (id) => {
  const [inscripcion, setInscripcion] = useState([]);
  useEffect(() => {
    getOneInscripcion(id).then((res) => {
      setInscripcion(res);
    });
  }, [id]);
  return inscripcion;
};
