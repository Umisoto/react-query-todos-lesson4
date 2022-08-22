import React, { FC, memo } from 'react'
import Pencil from '../atoms/icons/Pencil'
import Trash from '../atoms/icons/Trash'
import { setEditedTask } from '../../slices/todoSlice'
import { Task } from '../../types/types'
import { useAppDispatch } from '../../app/hooks';
import { useMutateTask } from '../../hooks/useMutateTask';

interface Props {
  task: Task
}

const TaskItem: FC<Props> = memo(({ task }) => {
    const dispatch=useAppDispatch()
    const {deleteTaskMutation}=useMutateTask()

    if(deleteTaskMutation.isLoading) return <p>Deleting...</p>
    
  return (
    <li className="my-3 flex justify-between">
      <div>
        <span className="font-bold" >{task.title}</span>
        <span>
          {' : '}
          {task.tag_name}
        </span>
      </div>
      <div className="flex ml-10 ">
        <Pencil onClick={() => dispatch(setEditedTask(task))} />
        <Trash onClick={() => deleteTaskMutation.mutate(task.id)} />
      </div>
    </li>
  )
})

export default TaskItem
