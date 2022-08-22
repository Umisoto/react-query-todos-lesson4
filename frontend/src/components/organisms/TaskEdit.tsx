import React, { FC, memo, ChangeEvent, FormEvent } from 'react'
import PrimaryInput from '../atoms/PrimaryInput'
import {
  selectTask,
  setEditedTask,
} from '../../slices/todoSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import Button from '../atoms/Button'
import { useQueryTags } from '../../hooks/useQueryTags';
import { useMutateTask } from '../../hooks/useMutateTask';

const TaskEdit: FC = memo(() => {
  const selectedTask = useAppSelector(selectTask)
  const dispatch = useAppDispatch()
  const {data, status}=useQueryTags()
  const {createTaskMutation, updateTaskMutation}=useMutateTask()

  const onChangeEditedTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEditedTask({ ...selectedTask, title: e.target.value }))
  }
  const onChangeEditedTaskTag=(e: ChangeEvent<HTMLSelectElement>)=>{
    dispatch(setEditedTask({...selectedTask, tag: Number(e.target.value)}))
  }
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(selectedTask.id===0){
      createTaskMutation.mutate(selectedTask)
    } else{
      updateTaskMutation.mutate(selectedTask)
    }
  }

  if(status==="loading") return <div>Loading...</div>
  if(status==="error") return <div>Error</div>
  if(updateTaskMutation.isLoading) return <span>Updating...</span>
  if(createTaskMutation.isLoading) return <span>Creating...</span>

  return (
    <div>
      <form method="post" onSubmit={onSubmitHandler}>
        <PrimaryInput
          onChange={onChangeEditedTaskTitle}
          placeholder="new task ?"
          value={selectedTask.title}
        />
        <Button disabled={!selectedTask.title || !selectedTask.tag}>
          {selectedTask.id === 0 ? 'Create' : 'Update'}
        </Button>
      </form>
          <select className="w-40 text-md border border-gray-300 py-2 pl-1 my-4 focus:outline-none" 
          onChange={onChangeEditedTaskTag} 
          value={selectedTask.tag}
          >
            <option value="0">Tag</option>
            {
              data?.map((tag: any)=>(
                <option value={tag.id} key={tag.id}>{tag.name}</option>
              ))
            }
          </select>
    </div>
  )
})

export default TaskEdit
