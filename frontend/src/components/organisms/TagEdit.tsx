import React, { FC, memo, ChangeEvent, FormEvent } from 'react'
import PrimaryInput from '../atoms/PrimaryInput'
import Button from '../atoms/Button'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectTag, setEditedTag } from '../../slices/todoSlice'
import { useMutateTag } from '../../hooks/useMutateTag';

const TagEdit: FC = memo(() => {
  const selectedTag = useAppSelector(selectTag)
  const dispatch = useAppDispatch()
  const {createTagMutation, updateTagMutation}=useMutateTag()

  const submitHandler=(e: FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(selectedTag.id===0){
          createTagMutation.mutate(selectedTag)
      } else{
          updateTagMutation.mutate(selectedTag)
      }
  }

  if(createTagMutation.isLoading) return <span>Creating...</span>
  if(updateTagMutation.isLoading) return <span>Updating...</span>

  return (
    <>
      <form onSubmit={submitHandler} >
        <PrimaryInput
          placeholder="new tag ?"
          value={selectedTag.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch(setEditedTag({ ...selectedTag, name: e.target.value }))
          }
        />
        <Button disabled={!selectedTag.name}>
          {selectedTag.id === 0 ? 'Create' : 'Update'}
        </Button>
      </form>
    </>
  )
})

export default TagEdit
