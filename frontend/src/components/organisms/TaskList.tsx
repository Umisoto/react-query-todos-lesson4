import React, { FC, memo } from 'react'
import { useQueryTasks } from '../../hooks/useQueryTasks';
import TaskItem from '../molecules/TaskItem';

const TaskList: FC = memo(() => {
  const {status, data}=useQueryTasks()

  if(status==="loading") return <div>{"Loading..."}</div>
  if(status==="error") return <div>Error</div>

  return (
    <div>
      {
        data?.map(task=>(
          <div key={task.id} >
            <ul>
            <TaskItem task={task} />
            </ul>
          </div>
        ))
      }
    </div>
  )
})

export default TaskList
