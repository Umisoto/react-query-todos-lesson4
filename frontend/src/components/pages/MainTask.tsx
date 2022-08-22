import React, { FC, useState, ChangeEvent } from 'react'
import TaskList from '../organisms/TaskList'
import TaskEdit from '../organisms/TaskEdit'
// import PrimaryInput from '../atoms/PrimaryInput'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router'

const MainTask: FC = () => {
  const navigate = useNavigate()
  // const [text, setText] = useState('')
  // const onChangeDummyText = (e: ChangeEvent<HTMLInputElement>) => {
  //   setText(e.target.value)
  // }

  return (
    <>
      {/* <PrimaryInput
        onChange={onChangeDummyText}
        placeholder="dummy text ?"
        value={text}
      /> */}
      <h2 className="text-center text-xl font-bold my-4">Tasks</h2>
      <div className="mt-6 grid grid-cols-2 gap-40">
        <TaskList />
        <TaskEdit />
      </div>
      <ChevronDoubleRightIcon
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
        onClick={() => navigate('/tags')}
      />
      <p>Tag page</p>
    </>
  )
}

export default MainTask
