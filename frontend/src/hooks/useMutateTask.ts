import { useQueryClient, useMutation } from '@tanstack/react-query'
import { EditTask, Task } from '../types/types'
import axios from 'axios'
import { useAppDispatch } from '../app/hooks'
import { resetEditedTask } from '../slices/todoSlice'

export const useMutateTask = () => {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()

  const createTaskMutation = useMutation(
    (task: Omit<EditTask, 'id'>) =>
      axios.post<Task>(`${process.env.REACT_APP_REST_URL}/tasks/`, task),
    {
      onSuccess: res => {
        // resはpostメソッドで作成したtaskオブジェクト<Task>が返ってくる
        const previousTasks = queryClient.getQueryData<Task[]>(['tasks'])
        if (previousTasks) {
          queryClient.setQueryData<Task[]>(
            ['tasks'],
            [...previousTasks, res.data]
          )
        }
        dispatch(resetEditedTask())
      }
    }
  )

  const updateTaskMutation = useMutation(
    (task: EditTask) =>
      axios.put<Task>(
        `${process.env.REACT_APP_REST_URL}/tasks/${task.id}/`,
        task
      ),
    {
      onSuccess: (res, variables) => {
        // resにはputメソッドで更新したtaskオブジェクト<Task>が入る
        // valiablesにはmutationの引数で受け取ったtask<EditTask>が入る
        const previousTasks = queryClient.getQueryData<Task[]>(['tasks'])
        if (previousTasks) {
          queryClient.setQueryData<Task[]>(
            ['tasks'],
            previousTasks.map(selectedTask =>
              selectedTask.id === variables.id ? res.data : selectedTask
            )
          )
        }
        dispatch(resetEditedTask())
      }
    }
  )

  const deleteTaskMutation = useMutation(
    (id: number) =>
      axios.delete(`${process.env.REACT_APP_REST_URL}/tasks/${id}/`),
    {
      onSuccess: (res, variables) => {
        const previousTasks = queryClient.getQueryData<Task[]>(['tasks'])
        if (previousTasks) {
          queryClient.setQueryData<Task[]>(
            ['tasks'],
            previousTasks.filter(selectedTask => selectedTask.id !== variables)
          )
        }
        dispatch(resetEditedTask())
      }
    }
  )

  return { createTaskMutation, updateTaskMutation, deleteTaskMutation }
}
