import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const CardMenutrash = ({ data }) => {
  return (
    <div className='Menutrash'>
      <h2>Otimize seu tempo e se organize com o nosso Planejador Diário.</h2>
      <div className='Card'>
        <h2>Deseja excluir esse item?</h2>
        <p>{data.description}oi</p>
        <div className='Card__button'>
          <Link to={"/"}><button type='submit' className='Card__button Card__button--blue'>Não</button></Link>
          <button type='submit' className='Card__button Card__button--white'>Sim</button>
        </div>
      </div>
    </div>
  )
}

export default CardMenutrash