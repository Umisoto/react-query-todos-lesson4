import React, { FC } from 'react'
import { PencilAltIcon } from '@heroicons/react/solid'

interface Props{
    onClick: ()=>void
}

const Pencil: FC<Props> = ({onClick}) => {
  return (
    <PencilAltIcon
      className="h-5 w-5 text-blue-500 cursor-pointer"
      onClick={onClick}
    />
  )
}

export default Pencil
