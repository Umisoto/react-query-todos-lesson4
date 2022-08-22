import axios from 'axios'
import { Tag } from '../types/types'
import { useQuery } from '@tanstack/react-query'

export const useQueryTags = () => {
  const getTags = async () => {
    const { data } = await axios.get<Tag[]>(
      `${process.env.REACT_APP_REST_URL}/tags/`
    )
    return data
  }

  return useQuery<Tag[], Error>({
    queryKey: ['tags'],
    queryFn: getTags,
    refetchOnWindowFocus: true,
    staleTime: 0,
    cacheTime: 0
  })
}
