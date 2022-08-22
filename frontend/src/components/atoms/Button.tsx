import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  disabled: boolean
}

const Button: FC<Props> = props => {
  const { children, disabled } = props
  return (
    <button
      className="disabled:opacity-40 m-3 p-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white cursor-pointer"
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
