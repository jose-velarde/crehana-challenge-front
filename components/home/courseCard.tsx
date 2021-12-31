import Image from 'next/image'
import { FaSignal, FaUsers, FaStar } from 'react-icons/fa'
import { Icourse } from '../../types/types'
import ButtonLink from '../buttonLink'

const CourseCard = ({ cardData }: { cardData: Icourse }) => {
  return (
    <div className="flex flex-col rounded-2xl border-gray-200">
      <div className="bg-gray-300 rounded-t-2xl">
        <Image src="/vercel.svg" alt="Vercel Logo" width={300} height={300} />
      </div>
      <div className="flex flex-col flex-1 gap-2 justify-between py-3 px-5 h-auto text-gray-900 bg-gray-100 rounded-b-2xl">
        <h5>{cardData.course_name}</h5>
        <span className="">{cardData.username}</span>
        <div className="flex flex-wrap justify-between font-semibold text-gray-500">
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
        <div className="flex flex-wrap justify-between items-center">
          <span className="text-2xl font-bold">
            USD${cardData.price}
          </span>
          <span className="text-gray-500 line-through">
            USD${cardData.real_price}
          </span>
        </div>
        <ButtonLink path={'/courses/' + cardData.id}>Comprar ahora</ButtonLink>
      </div>
    </div>
  )
}

export default CourseCard
