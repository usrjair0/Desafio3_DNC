import React from 'react'
import CardMenutrash from '../../components/CardMenu2/CardMenutrash'
import Headermenu from '../../components/Headermenu/Headermenu'
import { useParams } from 'react-router-dom';

const TasksTrash = ({ data }) => {
    const { taskstrashId } = useParams();
    const taskstrashselected = data.find((taskstrash) => taskstrash.id == taskstrashId);
  return (
    <div>
        <Headermenu />
        <CardMenutrash data={taskstrashselected}/>
    </div>
  )
}

export default TasksTrash