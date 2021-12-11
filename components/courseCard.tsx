import Image from 'next/image'
import { FaSignal, FaUsers, FaStar } from 'react-icons/fa'
import Button from './button'
import { Icourse } from '../types/types'

// const cardData = {
//   image: '',
//   course: 'Placeholder Course',
//   name: 'John Placeholder',
//   level: '99',
//   users: '1',
//   stars: '9.9',
//   price: 'USD$999,99',
//   discount: 'USD$999,98',
// }
const CourseCard = ({ cardData }: { cardData: Icourse }) => {
  return (
    <div className="border-gray-200 rounded-2xl ">
      <div className="bg-gray-300 rounded-t-2xl">
        <Image src="/vercel.svg" alt="Vercel Logo" width={300} height={300} />
      </div>
      <div className="grid grid-cols-1 gap-2 px-5 py-3 text-gray-900 bg-gray-100 rounded-b-2xl">
        <div className="font-bold ">{cardData.course_name}</div>
        <div className="">{cardData.username}</div>
        <div className="flex justify-between font-semibold text-gray-500">
          <span className="inline-flex items-center gap-1">
            <FaSignal /> Nivel {cardData.level}
          </span>
          <span className="inline-flex items-center gap-1">
            <FaUsers />
            {cardData.users} Usuarios
          </span>
          <span className="inline-flex items-center gap-1 ">
            <FaStar />
            {cardData.course_score}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            USD${Math.round(cardData.price * cardData.discount) / 100}
          </div>
          <div className="text-gray-500 line-through">USD${cardData.price}</div>
        </div>
        <Button>Comprar ahora</Button>
      </div>
    </div>
  )
}

export default CourseCard
