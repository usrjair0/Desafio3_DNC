import React, { useState } from 'react'
import './index.scss';
import Headermenu from '../../components/Headermenu/Headermenu'
import Organizador from '../../components/organizador/Organizador';
import CardMenu from '../../components/CardMenu/CardMenu';

const Home = ({ data }) => {

  {/* Lógica de abertura ou não do meu card de exclusão/alteração */}
  const [iscardopen, setiscardopen] = useState(false);
  const handdlecardopen = () =>{
    setiscardopen(true);
  }
  const handdlecardclose = () =>{
    setiscardopen(false)
  }
  return (
    <div className='home'> 
      <Headermenu />
      <div className="home__organizador">
        {iscardopen ? (
          <CardMenu onClose={handdlecardclose} data={data} />
        ):
        (
          <Organizador key={data.id} data={data} opnImg={handdlecardopen}/>
        )}
      </div>
    </div>
  )
}
   
export default Home