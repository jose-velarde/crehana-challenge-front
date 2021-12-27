import React from 'react'
import { StarsScore } from './StarsScore'

export const UserComment = ({
  user,
  score,
  comment,
}: {
  user: string
  score: number
  comment: string
}) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-16 h-16 bg-gray-300 rounded-xl"></div>
        <div className="flex flex-col gap-2 justify-between py-2 px-3">
          <div className="">{user}</div>
          <StarsScore size={Math.floor(score)} />
        </div>
      </div>
      <p className="">{comment}</p>
    </>
  )
}
