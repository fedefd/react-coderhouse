/* eslint-disable no-unused-vars */
import FetchingData from "./FetchingData";
import { useEffect, useState } from "react";

const FetchingDataContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let getUsers = fetch("https://jsonplaceholder.typicode.com/users");
    //getUsers.then().catch()         -- then((res)=> {})  catch( (error)=>{}) se puede poner cualquier nombre pero por buena practica se pone respuesta(res) y error
    getUsers
      .then((data) => data.json())
      .then((res) => {
        setUsers(res);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  const addUser = () => {
    let obj = {
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST", // metodo GET , POST , DELETE , PATCH, PUT etcetc.. (el get viene por default)
      body: JSON.stringify(obj),
      headers: {
        Authorization: "Barer pepito123333",
      },
    });
  };

  const updateUser = () => {
    let obj2 = {
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "12312312",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    fetch(
      "https://jsonplaceholder.typicode.com/users/2" /* el /2 es el id del user */,
      {
        method: "PUT", // PUT o PATCH para updatear algo -- el put sobrescribe toda la informacion con la informacion nueva -- el patch actualiza la informacion con la informacion nueva pero deja todas las demas como estan
        body: JSON.stringify(obj2),
        headers: {
          Authorization: "Barer pepito123333",
        },
      }
    );
  };
  return (
    <>
      <FetchingData addUser={addUser} updateUser={updateUser} />
    </>
  );
};

export default FetchingDataContainer;
