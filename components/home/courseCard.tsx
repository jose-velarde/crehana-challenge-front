import Image from 'next/image'
import { FaSignal, FaUsers, FaStar } from 'react-icons/fa'
import { Icourse } from '../../types/types'
import ButtonLink from '../buttonLink'

const CourseCard = ({ cardData }: { cardData: Icourse }) => {
  return (
    <div className="rounded-2xl border-gray-200">
      <div className="bg-gray-300 rounded-t-2xl">
        <Image src="/vercel.svg" alt="Vercel Logo" width={300} height={300} />
      </div>
      <div className="grid grid-cols-1 gap-2 py-3 px-5 text-gray-900 bg-gray-100 rounded-b-2xl">
        <div className="font-bold ">{cardData.course_name}</div>
        <div className="">{cardData.username}</div>
        <div className="flex justify-between font-semibold text-gray-500">
          <span className="inline-flex gap-1 items-center">
            <FaSignal /> Nivel {cardData.level}
          </span>
          <span className="inline-flex gap-1 items-center">
            <FaUsers />
            {cardData.users} Usuarios
          </span>
          <span className="inline-flex gap-1 items-center">
            <FaStar />
            {cardData.course_score}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            USD${Math.round(cardData.price * cardData.discount) / 100}
          </div>
          <div className="text-gray-500 line-through">USD${cardData.price}</div>
        </div>
        <ButtonLink path={'/courses/' + cardData.id}>Comprar ahora</ButtonLink>
      </div>
    </div>
  )
}

export default CourseCard
