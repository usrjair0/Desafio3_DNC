import React from 'react';
import './index.scss';

const CardMenupen = ({ data, onClose }) => {
  return (
    <div className='CardMenupen'>
      <h2>Otimize seu tempo e se organize com o nosso Planejador Diário.</h2>
        <div className='Card'>
          <h2>Deseja editar esse item?</h2>
          <p>{data.description}oi</p>
          <div className='Card__button'>
            <button className='Card__button Card__button--blue' onClick={onClose}>Não</button>
            <button className='Card__button Card__button--white'>Sim</button>
          </div>
        </div>
    </div>
  )
}

export default CardMenupen