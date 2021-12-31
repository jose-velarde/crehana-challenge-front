import React, { useRef } from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { StarsScore } from './StarsScore'

export const ScoreBar = ({
  size,
  quantity,
}: {
  size: number
  quantity: number | undefined
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { freezeOnceVisible: true })
  const isVisible = !!entry?.isIntersecting

  return (
    <div className="inline-flex gap-2 items-center" ref={ref}>
      <div className="flex grow h-1 bg-gray-200">
        <div
          className={'h-1 bg-blue-600 transition-all duration-1000'}
          style={{ width: isVisible ? `${quantity}%` : '0%' }}
        ></div>
      </div>
      <StarsScore size={size} />
      <span className="w-12">{`${quantity}%`}</span>
    </div>
  )
}
