import React, { FC } from 'react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import TagList from '../organisms/TagList'
import TagEdit from '../organisms/TagEdit'
import { useNavigate } from 'react-router'

const MainTag: FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1 className="text-xl font-bold mb-10">Tags</h1>
      <div className="grid grid-cols-2 gap-40">
        <TagList />
        <TagEdit />
      </div>
      <ChevronDoubleLeftIcon
        className="w-5 h-5 mt-2 text-blue-500 cursor-pointer"
        onClick={() => navigate('/')}
      />
      <p>Task page</p>
    </>
  )
}

export default MainTag
