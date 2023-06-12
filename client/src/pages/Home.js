import React, { useEffect, useState } from "react";
import { AnnonceList } from "../api/userApi";

const Home = () => {
  const [list, setList] = useState([]);

  const getAnnonces = async () => {
    await AnnonceList()
      .then((res) => {
        setList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAnnonces();
  }, []);
  return (
    <div>
      <h1> Annonce list </h1>
      <div className="myhome">
        {list.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.location}</h1>
              <img src={item.picture} alt="home" />
              <h3>{item.price}</h3>
            </div>
          );
        })}
      </div>

      <label>type </label>
      <select>
        <option>null</option>
        <option>foyer</option>
        <option>appartement</option>
      </select>
    </div>
  );
};

export default Home;
