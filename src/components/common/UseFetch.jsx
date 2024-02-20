import { useCount, useFetch } from "../../hooks";

const UseFetch = () => {
  const { count, increment, decrement } = useCount(1);
  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/?page=${count}`
  );

  if (isLoading) {
    console.log("cargando");
    return <div>Loading</div>;
  }

  return (
    <div>
      <h3>Personajes</h3>

      <div>
        {data.results.map(({ id, name, gender, image }) => (
          <div key={id}>
            <p>Nombre: {name}</p>
            <p>Genero: {gender}</p>
            <img src={image} alt="" />
            <button>detalles</button>
          </div>
        ))}
      </div>
      <div>
        {count > 1 ? (
          <button onClick={decrement}>atras{}</button>
        ) : (
          <button onClick={decrement} disabled>
            atras{}
          </button>
        )}
        {/* {count > 1 && <button onClick={decrement}>atras{}</button>} */}

        <strong>page {count}</strong>
        <button onClick={increment}>siguiente{}</button>
      </div>
    </div>
  );
};

export default UseFetch;
