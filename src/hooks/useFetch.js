import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });

  const getData = async () => {
    setState({
      ...state,
      isLoading: true, // nos aseguramos que isLoading del state este en true cuando se pide la data
    });

    const resp = await fetch(url); //solicitamos la data de la api
    const respData = await resp.json();
    console.log(respData);

    setState({
      // cuando obtenemos la respuesta de la api, la almacenamos en el state, cambiamos el isLoading a false para que mostremos la data
      data: respData,
      isLoading: false,
    });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
  };
};
