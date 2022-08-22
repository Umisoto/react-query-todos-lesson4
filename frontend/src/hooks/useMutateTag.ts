import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useAppDispatch } from '../app/hooks'
import { Tag } from '../types/types'
import axios from 'axios'
import { resetEditedTag } from '../slices/todoSlice'

export const useMutateTag = () => {
  const dispatch = useAppDispatch()
  const queryClient = useQueryClient()

  const createTagMutation = useMutation(
    (tag: Omit<Tag, 'id'>) =>
      axios.post<Tag>(`${process.env.REACT_APP_REST_URL}/tags/`, tag),
    {
      onSuccess: (res: any) => {
        const previousTags = queryClient.getQueryData<Tag[]>(['tags'])
        if (previousTags) {
          queryClient.setQueryData<Tag[]>(['tags'], [...previousTags, res.data])
        }
        dispatch(resetEditedTag())
      }
    }
  )

  const updateTagMutation = useMutation(
    (tag: Tag) =>
      axios.put<Tag>(`${process.env.REACT_APP_REST_URL}/tags/${tag.id}/`, tag),
    {
      onSuccess: (res: any, valiables: any) => {
        const previousTags = queryClient.getQueryData<Tag[]>(['tags'])
        if (previousTags) {
          queryClient.setQueryData<Tag[]>(
            ['tags'],
            previousTags.map(selectedTag =>
              selectedTag.id === valiables.id ? res.data : selectedTag
            )
          )
        }
        dispatch(resetEditedTag())
      }
    }
  )

  const deleteTagMutation = useMutation(
    (id: number) =>
      axios.delete(`${process.env.REACT_APP_REST_URL}/tags/${id}`),
    {
      onSuccess: (res: any, valiables: any) => {
        const previousTags = queryClient.getQueryData<Tag[]>(['tags'])
        if (previousTags) {
          queryClient.setQueryData(
            ['tags'],
            previousTags.filter(selectedTag => selectedTag.id !== valiables)
          )
        }
        dispatch(resetEditedTag())
      }
    }
  )

  return { createTagMutation, updateTagMutation, deleteTagMutation }
}
