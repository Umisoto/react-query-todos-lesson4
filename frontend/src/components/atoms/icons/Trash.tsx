import React, { FC } from 'react'
import { TrashIcon } from '@heroicons/react/solid'

interface Props {
  onClick: () => void
}

const Trash: FC<Props> = ({onClick}) => {
  return (
    <TrashIcon
      className="h-5 w-5 text-blue-500 cursor-pointer"
      onClick={onClick}
    />
  )
}

export default Trash
