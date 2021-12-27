import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

export const PeerCheckbox = ({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) => {
  return (
    <>
      <input type="checkbox" name="show-more" id={id} className="peer hidden" />
      {children}
      <label htmlFor={id} className="cursor-pointer">
        Mostrar más
      </label>
      <label
        htmlFor={id}
        className="self-center peer-checked:rotate-180 cursor-pointer"
      >
        <FaAngleDown />
      </label>
    </>
  )
}
