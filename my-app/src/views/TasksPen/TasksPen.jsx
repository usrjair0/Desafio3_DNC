import React from 'react'
import CardMenupen from '../../components/CardMenu/CardMenupen'
import Headermenu from '../../components/Headermenu/Headermenu'
import { useParams } from 'react-router-dom';

const TasksPen = ({ data }) => {
    const { taskspenId } = useParams();
    const taskspenselected = data.find((taskspen) => taskspen.id == taskspenId);
  return (
    <div>
        <Headermenu />
        <CardMenupen data={taskspenselected}/>
    </div>
  )
}

export default TasksPen