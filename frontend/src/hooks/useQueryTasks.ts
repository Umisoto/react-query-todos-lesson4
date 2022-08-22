import axios from 'axios'
import { Task } from '../types/types'
import { useQuery } from '@tanstack/react-query'

export const useQueryTasks = () => {
  const getTasks = async () => {
    const { data } = await axios.get<Task[]>(
      `${process.env.REACT_APP_REST_URL}/tasks/`
    // "http://127.0.0.1:8000/api/tasks/" 
    )

    return data
  }

  return useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: getTasks,
    cacheTime: 60000,
    staleTime: 0,
    refetchOnWindowFocus: true
  })
}
