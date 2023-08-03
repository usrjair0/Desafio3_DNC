import React from 'react'
import CardMenu from '../../components/CardMenu/CardMenu'
import Headermenu from '../../components/Headermenu/Headermenu'
import { useParams } from 'react-router-dom';

const TasksTrash = ({ data }) => {
    const { taskstrashId } = useParams();
    const taskstrashselected = data.find((taskstrash) => taskstrash.id == taskstrashId);
  return (
    <div>
        <Headermenu />
        <CardMenu data={taskstrashselected} type='excluir'/>
    </div>
  )
}

export default TasksTrash