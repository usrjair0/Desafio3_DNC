import React, {useState} from 'react'
import './index.scss';
import pencil from '../../assets/pencil.svg';
import trash from '../../assets/trash.svg';
import square from '../../assets/square.svg';
import some from '../../assets/some.svg';
import squareClicked from '../../assets/squareClicked.svg'

const Organizador = ({ data, opnpen, opntrash }) => {
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array//
    const [taskImages, setTaskImages] = useState(Array(data.length).fill(false)); //o fill preenche tudo com false.
    const handleImageClick = (index) => {
    const newTaskImages = [...taskImages];
    newTaskImages[index] = !newTaskImages[index]; //estou invertendo o valor do index, da imagem
    setTaskImages(newTaskImages);
  };

  return (
    <main className='main'>
        <h2>Otimize seu tempo e se organize com o nosso Planejador Diário.</h2>
        <table className='main__table'>
            <thead className='main__thead'>
                <tr className='main__tr'>
                    <td className='main__item'>Tarefa</td>
                    <td className='main__item'>Status</td>
                    <td className='main__item'>Opções</td>
                </tr>
            </thead>
            <tbody className='main__tbody'> 
            {data.map((task, index) => (
                <tr key={index}>
                    <td>{task.title}</td>
                    <td className='main__square'>
                        {taskImages[index] ? (
                        <img src={squareClicked} onClick={() => handleImageClick(index)} width={15} />
                        ) : (
                        <img src={square} onClick={() => handleImageClick(index)} width={15} />
                        )}
                    </td> 
                    <td className='main__images'>
                        <img src={pencil} onClick={opnpen} width={20}/>
                        <img src={trash} onClick={opntrash} width={20}/>
                    </td>
                </tr>
            ))}
            </tbody> 
            <tfoot className='main__tfoot'>
                <tr>
                    <td>Nova tarefa...</td>
                    <td></td>
                    <td><img src={some}/></td>
                </tr>
            </tfoot>
        </table>
    </main>
  )
}

export default Organizador