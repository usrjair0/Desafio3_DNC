import React from 'react';
import './index.scss';

const CardMenu = ({ data, onClose }) => {
  
  return (
    <div>
      <h2>{
      `Deseja excluir esse item?`
      }</h2>
      <p>{data.description}</p>
      <div>
      <button onClick={onClose}>Não</button>
      <button>Sim</button>
      </div>
    </div>
  )
}

export default CardMenu