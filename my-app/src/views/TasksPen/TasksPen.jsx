import React from 'react'
import CardMenu from '../../components/CardMenu/CardMenu'
import Headermenu from '../../components/Headermenu/Headermenu'
import { useParams } from 'react-router-dom';

const TasksPen = ({ data }) => {
    const { taskspenId } = useParams();
    const taskspenselected = data.find((taskspen) => taskspen.id == taskspenId);
  return (
    <div>
        <Headermenu />
        <CardMenu data={taskspenselected} type='editar'/>
    </div>
  )
}

export default TasksPen