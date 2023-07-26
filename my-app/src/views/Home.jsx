import React from 'react'
import './index.scss';
import Headermenu from '../components/Headermenu/Headermenu'
import Organizador from '../components/organizador/Organizador';

const Home = ({ data }) => {
  return (
    <div className='home'> 
      <Headermenu />
      <div className="home__organizador">
      <Organizador key={data.id} data={data}/>
      </div>
    </div>
  )
}
   
    

export default Home