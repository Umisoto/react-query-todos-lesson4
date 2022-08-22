import React, { FC, memo } from 'react'
import { Tag } from '../../types/types'
import Pencil from '../atoms/icons/Pencil'
import Trash from '../atoms/icons/Trash'
import { useAppDispatch } from '../../app/hooks'
import { setEditedTag } from '../../slices/todoSlice'
import { useMutateTag } from '../../hooks/useMutateTag';

interface Props {
  tag: Tag
}

const TagItem: FC<Props> = memo(({ tag }) => {
  const dispatch = useAppDispatch()
  const {deleteTagMutation}=useMutateTag()

  if(deleteTagMutation.isLoading) return <p>Deleting...</p>

  return (
    <li className="flex justify-between">
      <span className="font-bold">{tag.name}</span>
      <div className="flex ml-10">
        <Pencil onClick={() => dispatch(setEditedTag(tag))} />
        <Trash onClick={() => deleteTagMutation.mutate(tag.id)} />
      </div>
    </li>
  )
})

export default TagItem
