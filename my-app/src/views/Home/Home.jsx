import React, { useState } from "react";
import "./index.scss";
import Headermenu from "../../components/Headermenu/Headermenu";
import Organizador from "../../components/organizador/Organizador";
import CardMenupen from "../../components/CardMenu/CardMenupen";
import CardMenutrash from "../../components/CardMenu2/CardMenutrash";

const Home = ({ data }) => {
  {
    /* Lógica de abertura ou não do meu card de exclusão/alteração */
  }
  const [ispenOpen, setispenOpen] = useState(false);
  const [istrashOpen, setistrashOpen] = useState(false);
  const handdlepenOpen = () => {
    setispenOpen(true);
  };
  const handdlepenClose = () => {
    setispenOpen(false);
  };
  const handdletrashOpen = () => {
    setistrashOpen(true);
  };
  const handdletrashClose = () => {
    setistrashOpen(false);
  };
  return (
    <div className="home">
      <Headermenu />
      <div className="home__organizador">
        {ispenOpen ? (
          <CardMenupen onClose={handdlepenClose} data={data} />
        ) : istrashOpen ? (
          <CardMenutrash onClose={handdletrashClose} data={data} />
        ) : (
          <Organizador
            key={data.id}
            data={data}
            opnpen={handdlepenOpen}
            opntrash={handdletrashOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
