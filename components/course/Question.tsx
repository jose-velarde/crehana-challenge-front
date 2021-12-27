import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

export const Question = ({ id }: { id: string }) => {
  return (
    <div className="flex flex-wrap p-3 border">
      <input
        type="checkbox"
        name={'show-question-' + id}
        id={'show-question-' + id}
        className="peer hidden"
      />
      <label
        htmlFor={'show-question-' + id}
        className="grow text-lg font-bold cursor-pointer"
      >
        Pregunta {id}
      </label>
      <label
        htmlFor={'show-question-' + id}
        className="self-center peer-checked:rotate-180 cursor-pointer"
      >
        <FaAngleDown />
      </label>
      <p className="flex overflow-y-hidden flex-wrap gap-1 max-h-0 peer-checked:max-h-32 transition-all duration-500">
        Body 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Cupiditate possimus sequi quisquam, dolores at fuga itaque maiores
        deleniti ab animi facilis ex, natus hic accusamus nam officiis minima
        nesciunt placeat.
      </p>
    </div>
  )
}
