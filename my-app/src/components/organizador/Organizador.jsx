import React, {useState} from 'react'
import './index.scss';
import pencil from '../../assets/pencil.svg';
import trash from '../../assets/trash.svg';
import square from '../../assets/square.svg';
import some from '../../assets/some.svg';
import squareClicked from '../../assets/squareClicked.svg'

const Organizador = ({data}) => {
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
    const [taskImages, setTaskImages] = useState(Array(data.length).fill(false)); //o fill preenche tudo com false.
    const handleImageClick = (index) => {
    const newTaskImages = [...taskImages];
    newTaskImages[index] = !newTaskImages[index];
    setTaskImages(newTaskImages);
  };
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
                    <td>
                        {isSquareClicked ? (
                            <img src={squareClicked} onClick={handleisSquareClicked} width={15}/>
                        ):(
                            <img src={square} onClick={handleisSquareClicked} width={15}/> 
                        )}
                    </td> 
                    <td>
                        <img src={pencil} width={20}/>
                        <img src={trash} width={20}/>
                    </td>
                </tr>
            ))}
            </tbody> 
            <tfoot>
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