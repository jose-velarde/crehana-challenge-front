import React from 'react'
import { FaStar } from 'react-icons/fa'

export const StarsScore = ({ size }: { size: number }) => {
  return (
    <div className="flex gap-y-3">
      {[1, 2, 3, 4, 5].map((star) => {
        return star <= size ? (
          <FaStar key={star + 'stars'} className="text-gray-600" />
        ) : (
          <FaStar key={star + 'stars'} className="text-gray-300" />
        )
      })}
    </div>
  )
}
