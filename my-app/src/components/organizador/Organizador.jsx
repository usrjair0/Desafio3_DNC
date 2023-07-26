import React from 'react'
import './index.scss';

const Organizador = ({data}) => {
  return (
    <main className='main'>
        <h2>Otimize seu tempo e se organize com o nosso Planejador Diário.</h2>
        <table className='main__table'>
            <thead className='main__table main__table--head'>
                <th>Tarefa</th>
                <th>Status</th>
                <th>Opções</th>
            </thead>
            <tbody id='tbody'> 
            {data.map((task, index) => (
                <tr key={index}>
                    <td>{task.description}</td>
                    <td></td> 
                    <td></td>
                </tr>
            ))}
            </tbody> 
        </table>
    </main>
  )
}

export default Organizador