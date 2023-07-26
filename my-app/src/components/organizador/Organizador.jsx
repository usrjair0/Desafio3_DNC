import React from 'react'
import './index.scss';

const Organizador = () => {
  return (
    <main className='main'>
        <h2>Otimize seu tempo e se organize com o nosso Planejador Diário.</h2>
        <table className='main__table'>
            <tr className='main__table main__table--head'>
                <th>Tarefa</th>
                <th>Status</th>
                <th>Opções</th>
            </tr>
        </table>
    </main>
  )
}

export default Organizador