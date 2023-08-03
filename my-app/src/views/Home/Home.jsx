import React, { useState } from "react";
import "./index.scss";
import Headermenu from "../../components/Headermenu/Headermenu";
import Organizador from "../../components/organizador/Organizador";
import CardMenupen from "../../components/CardMenu/CardMenupen";
import CardMenutrash from "../../components/CardMenu2/CardMenutrash";

// O parâmetro data criado aqui é passado para a main e recebe o valor do meu Tarefas.mock
const Home = ({ data }) => {
  {
    /* Lógica de abertura ou não do meu card de exclusão/alteração */
  }
  {/* const { tarefaId } = useParams();
  const selectedtarefa = data.find((tarefa) => tarefa.id == tarefaId);
  
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
  };*/}
  return (
    <div className="home">
      <Headermenu />
      <div className="home__organizador">
        <Organizador
          key={data.id}
          data={data}
        />
      </div>
    </div>
  );
};

export default Home;
