import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {
  FaHeart,
  FaLock,
  FaMoon,
  FaPlayCircle,
  FaShare,
  FaSignal,
  FaStar,
  FaUserCircle,
  FaUsers,
} from 'react-icons/fa'
import Button from '../../components/button'
import ButtonLink from '../../components/buttonLink'
import { Icourse } from '../../types/types'

import { PeerCheckbox } from '../../components/course/PeerCheckbox'
import { UserComment } from '../../components/course/UserComment'
import { StarsScore } from '../../components/course/StarsScore'
import { ScoreBar } from '../../components/course/ScoreBar'
import { Question } from '../../components/course/Question'

const mock = {
  topics: [
    {
      chapter: 'Introducción',
      content: [
        'El instructor',
        'La tecnología',
        'Ventajas y desventajas',
        'Instalación',
      ],
    },
    {
      chapter: 'Todo lo básico',
      content: [
        'Cuando usar esta tecnología',
        'Todo lo que necesitas saber',
        'Testing',
      ],
    },
    {
      chapter: 'Conceptos Avanzados',
      content: ['Reusa tu implementación', 'Cierre del curso'],
    },
  ],
  projects: [
    { project: '1', user: 'Juan' },
    { project: '2', user: 'Jose' },
    { project: '3', user: 'Josefina' },
    { project: '4', user: 'Julia' },
    { project: '5', user: 'Julio' },
    { project: '6', user: 'Jupiter' },
    { project: '7', user: 'Justavo' },
    { project: '8', user: 'Jarcelo' },
    { project: '9', user: 'Jaria' },
    { project: '10', user: 'Jestevan' },
  ],
}

const comment =
  'Body 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio maxime, nesciunt porro fugit temporibus ut cumque impedit? Veniam optio voluptatem odio earum dicta architecto aspernatur, possimus aut? Sequi, doloribus.-'

const Course = () => {
  const router = useRouter()
  const { id } = router.query
  const [course, setCourse] = useState<Icourse | null>(null)

  const addToCart = (courseId: number | undefined) => {
    if (courseId) {
    }
  }
  const getCourse = () => {
    axios
      .get('courses/' + id + '/')
      .then((response) => {
        setCourse(response.data)
      })
      .catch((error) => {
        console.error(error)
        setCourse(null)
      })
  }

  useEffect(() => {
    if (router.isReady) {
      getCourse()
    }
  }, [router.isReady])

  let count = 0
  return (
    <main className="flex overflow-x-hidden flex-col items-center w-full">
      {/* course info */}
      <div className="flex gap-16 justify-between w-10/12">
        {/* course details */}
        <div className="flex flex-col gap-5 justify-around py-5 w-full">
          <h2 className="">{course?.course_name}</h2>
          <p>
            Body 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sapiente perspiciatis expedita fuga doloremque voluptatem quas eum
            tenetur rerum nemo in necessitatibus maxime nostrum veniam, quod
            quasi modi cupiditate non itaque.
          </p>
          <div className="flex gap-4 justify-start font-semibold text-gray-500 whitespace-nowrap">
            <span className="inline-flex gap-1 items-center">
              <FaSignal /> Nivel {course?.level}
            </span>
            <span className="inline-flex gap-1 items-center">
              <FaUsers />
              {course?.users} Usuarios
            </span>
            <span className="inline-flex gap-1 items-center">
              <FaStar />
              {course?.course_score}
            </span>
          </div>
          <div className="flex gap-x-5 items-center">
            <div className="flex justify-center items-center w-20 h-20 bg-gray-300 rounded-xl">
              <FaUserCircle className="text-gray-400" size={64} />
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <div className="font-bold ">{course?.username}</div>
              <div className="">Cargo profesor</div>
            </div>
          </div>
          <div className="flex gap-20">
            <label htmlFor="action-button1" className="cursor-pointer ">
              <input
                className="peer hidden"
                type="checkbox"
                id="action-button1"
                name="action-button"
              />
              <div className="flex flex-col items-center font-bold text-gray-400 peer-checked:text-red-600 transition-all duration-500 hover:scale-110">
                <FaHeart size={24} />
                <span>Like!</span>
              </div>
            </label>
            <label htmlFor="action-button2" className="cursor-pointer ">
              <input
                className="peer hidden"
                type="checkbox"
                id="action-button2"
                name="action-button"
              />
              <div className="flex flex-col items-center font-bold text-gray-400 peer-checked:text-yellow-400 transition-all duration-500 hover:scale-110">
                <FaMoon size={24} />
                <span className=" whitespace-nowrap">Remind me!</span>
              </div>
            </label>
            <label htmlFor="action-button3" className="cursor-pointer ">
              <input
                className="peer hidden"
                type="button"
                id="action-button3"
                name="action-button"
              />
              <div className="flex flex-col items-center font-bold text-gray-400 peer-active:text-green-600 transition-all duration-1000 peer-active:duration-[0ms] hover:scale-110">
                <FaShare size={24} />
                <span>Share!</span>
              </div>
            </label>
          </div>
        </div>
        {/* course trailer video */}
        <aside className="relative top-10 z-50">
          <div className="flex flex-col gap-y-3 justify-center items-center w-72 lg:w-[480px] h-48 lg:h-72 bg-gray-900">
            <FaPlayCircle size={48} color="white" />
            <div className="text-xl font-bold text-white">
              Ver trailer del curso
            </div>
          </div>
          <div className="w-72 lg:w-[480px] bg-gray-200 rounded-b-2xl">
            <div className="flex gap-2 justify-around py-3 px-5 text-gray-900">
              <div className="inline-flex items-center text-3xl font-extrabold">
                <span className="text-lg">USD</span>$
                {course?.price
                  ? Math.round(course?.price * course?.discount) / 100
                  : null}
              </div>
              <div className="inline-flex items-center text-2xl text-gray-400 line-through">
                USD${course?.price}
              </div>
            </div>
            <div className="flex flex-col gap-2 py-3 px-5">
              <ButtonLink path={'/checkout/' + course?.id}>
                Comprar ahora
              </ButtonLink>
              <Button outline={true} onClick={() => addToCart(course?.id)}>
                Agregar a carrito
              </Button>
            </div>
          </div>
        </aside>
      </div>
      {/* course outline */}
      <div className="flex justify-center w-full bg-gray-100">
        <div className="flex gap-16 justify-between py-5 w-10/12">
          <div className="flex flex-col gap-3 w-full">
            <h3 className="whitespace-nowrap">Temario del curso</h3>
            {mock.topics.map((topic) => {
              return (
                <div key={'topic' + count}>
                  <div className="font-bold">{topic.chapter}</div>
                  <ul>
                    {topic.content.map((item) => {
                      count += 1
                      return (
                        <li
                          key={'item' + count}
                          className="flex justify-between"
                        >
                          {count}. {item}
                          <FaLock className="text-gray-400" size={16} />
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
          <aside className="hidden lg:block">
            <div className="w-[480px]"></div>
          </aside>
        </div>
      </div>
      {/* course about */}
      <div className="flex gap-16 justify-between py-5 w-10/12">
        <div className="flex flex-wrap gap-3">
          <h3 className="">De qué se trata este curso?</h3>
          <PeerCheckbox id="show-about-course">
            <p className="overflow-y-hidden max-h-12 peer-checked:max-h-64 leading-6 transition-all duration-500">
              Body 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Pariatur veniam perspiciatis hic ex rem sint nobis dignissimos
              fuga, eos, ullam accusantium nam ducimus itaque voluptas saepe
              incidunt officiis magnam quasi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Pariatur veniam perspiciatis hic ex
              rem sint nobis dignissimos fuga, eos, ullam accusantium nam
              ducimus itaque voluptas saepe incidunt officiis magnam quasi.
            </p>
          </PeerCheckbox>
        </div>
        <aside className="hidden lg:block">
          <div className="w-[480px]"></div>
        </aside>
      </div>
      {/* course projects */}
      <div className="flex gap-16 justify-between py-5 w-10/12">
        <div className="flex flex-col gap-3 w-full">
          <h3 className="">Proyectos del curso</h3>
          <div className="grid grid-cols-4 grid-rows-2 gap-2 font-semibold text-white ">
            {mock.projects.map((project, index) => {
              return index == 0 ? (
                <div
                  key={'project' + index}
                  className="aspect-square flex col-span-2 row-span-2 justify-start items-end p-2 h-80 bg-gray-400 rounded-xl transition-all hover:scale-105"
                >
                  <span className="aspect-square inline-flex gap-2 items-center">
                    <FaUserCircle size={24} className="text-gray-700 " />
                    {project.user}
                  </span>
                </div>
              ) : index <= 3 ? (
                <div
                  key={'project' + index}
                  className="flex justify-start items-end p-2 bg-gray-400 rounded-xl transition-all hover:scale-105"
                >
                  <span className="aspect-square inline-flex gap-2 items-center">
                    <FaUserCircle size={24} className="text-gray-700 " />
                    {project.user}
                  </span>
                </div>
              ) : index == 4 ? (
                <a
                  key={'project' + index}
                  href=""
                  className="flex justify-center items-center bg-gray-700 rounded-xl transition-all hover:scale-105"
                >
                  <span className="text-6xl font-bold ">
                    +{mock.projects.length - 4}
                  </span>
                </a>
              ) : null
            })}
          </div>
        </div>
        <aside className="hidden lg:block">
          <div className="w-[480px]"></div>
        </aside>
      </div>
      {/* Course feedback */}
      <div className="flex gap-16 justify-between py-5 w-10/12">
        <div className="flex flex-col gap-3 w-full">
          <h3 className="">Valoraciones</h3>
          <div className="flex">
            <div className="flex flex-col gap-3 justify-around items-center p-2">
              <div className="flex justify-center text-6xl font-extrabold">
                {course?.course_score}
              </div>
              <div className="">
                <StarsScore
                  size={
                    course?.course_score ? Math.floor(course?.course_score) : 0
                  }
                />
                <div className="flex justify-center">Media total</div>
              </div>
            </div>
            <div className="flex flex-col justify-around p-2 w-full">
              <ScoreBar size={5} quantity={85} />
              <ScoreBar size={4} quantity={20} />
              <ScoreBar size={3} quantity={5} />
              <ScoreBar size={2} quantity={0} />
              <ScoreBar size={1} quantity={0} />
            </div>
          </div>
          {/* Comments */}
          <div className="flex flex-wrap gap-3">
            {/* Comment #1 - Fixed */}
            <div className="flex overflow-y-hidden flex-col gap-3">
              <UserComment user="Mock User #0" score={4} comment={comment} />
            </div>
            {/* Comment #2+*/}
            <PeerCheckbox id="show-comments">
              <div className="flex overflow-y-hidden flex-col gap-3 max-h-0 peer-checked:max-h-[720px] opacity-0 peer-checked:opacity-100 transition-all duration-500 ease-out">
                <UserComment user="Mock User #1" score={5} comment={comment} />
                <UserComment user="Mock User #2" score={3} comment={comment} />
                <UserComment user="Mock User #3" score={1} comment={comment} />
              </div>
            </PeerCheckbox>
          </div>
        </div>
        <aside className="hidden lg:block">
          <div className="w-[480px]"></div>
        </aside>
      </div>
      {/* Course faq */}
      <div className="flex gap-16 justify-between py-5 w-10/12">
        <div className="flex flex-col gap-3 w-full">
          <h3 className="">Preguntas frecuentes</h3>
          <Question id="1" />
          <Question id="2" />
          <Question id="3" />
        </div>
        <aside className="hidden lg:block">
          <div className="w-[480px]"></div>
        </aside>
      </div>
    </main>
  )
}

export default Course
