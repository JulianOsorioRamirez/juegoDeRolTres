import { useEffect, useState } from 'react';
import { getOneEvent } from '../helpers/getOneEvent';

export const useFetchOne = (id) => {
  const [usuario, setUsuario] = useState({});
  useEffect(() => {
    getOneEvent(id).then((res) => {
      setUsuario(res);
    });
  }, [id]);
  return usuario;
};
