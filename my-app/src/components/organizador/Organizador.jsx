import React, {useState} from 'react'
import './index.scss';
import pencil from '../../assets/pencil.svg';
import trash from '../../assets/trash.svg';
import square from '../../assets/square.svg';
import some from '../../assets/some.svg';
import squareClicked from '../../assets/squareClicked.svg'

const Organizador = ({data}) => {
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array//
    const [taskImages, setTaskImages] = useState(Array(data.length).fill(false)); //o fill preenche tudo com false.
    const handleImageClick = (index) => {
    const newTaskImages = [...taskImages];
    newTaskImages[index] = !newTaskImages[index];
    setTaskImages(newTaskImages);
  };
  return (
    <main className='main'>
        <h2>Otimize seu tempo e se organize com o nosso Planejador Diário.</h2>
        <div className="containertable">
        <table className='main__table'>
            <thead className='main__thead'>
                <tr>
                    <th className='main__item'>Tarefa</th>
                    <th className='main__item'>Status</th>
                    <th className='main__item'>Opções</th>
                </tr>
            </thead>
            <tbody className='main__tbody'> 
            {data.map((task, index) => (
                <tr key={index}>
                    <td>{task.title}</td>
                    <td>
                        {taskImages[index] ? (
                        <img src={squareClicked} onClick={() => handleImageClick(index)} width={15} />
                        ) : (
                        <img src={square} onClick={() => handleImageClick(index)} width={15} />
                        )}
                    </td> 
                    <td>
                        <img src={pencil} width={20}/>
                        <img src={trash} width={20}/>
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
        </div>
    </main>
  )
}

export default Organizador