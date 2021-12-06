import Image from 'next/image'
import { FaSignal, FaUsers, FaStar } from 'react-icons/fa'
import Button from './button'

const cardData = {
  image: '',
  course: 'Placeholder Course',
  name: 'John Placeholder',
  level: '99',
  users: '1',
  stars: '9.9',
  price: 'USD$999,99',
  discount: 'USD$999,98',
}
const CourseCard = () => {
  return (
    <div className="border-gray-200 rounded-2xl ">
      <div className="bg-gray-300 rounded-t-2xl">
        <Image src="/vercel.svg" alt="Vercel Logo" width={300} height={300} />
      </div>
      <div className="grid grid-cols-1 gap-1 px-5 py-3 bg-gray-100 text-gray-900 rounded-b-2xl">
        <div className="font-bold ">{cardData.course}</div>
        <div className="">{cardData.name}</div>
        <div className="font-semibold text-gray-500 flex justify-between">
          <span className="inline-flex items-center gap-1">
            <FaSignal /> Nivel {cardData.level}
          </span>
          <span className="inline-flex items-center gap-1">
            <FaUsers />
            {cardData.users} Usuarios
          </span>
          <span className=" inline-flex items-center gap-1">
            <FaStar />
            {cardData.stars}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">{cardData.discount}</div>
          <div className="text-gray-500 line-through">{cardData.price}</div>
        </div>
        <Button>Comprar ahora</Button>
      </div>
    </div>
  )
}

export default CourseCard
