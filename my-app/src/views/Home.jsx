import React from 'react'
import './index.scss';
import Headermenu from '../components/Headermenu/Headermenu'
import Organizador from '../components/organizador/Organizador';

const Home = () => {
  return (
    <div className='home'> 
    <Headermenu />
    <Organizador />
    </div>
  )
}
   
    

export default Home