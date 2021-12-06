import type { NextPage } from 'next'
import { useState } from 'react'
import Button from '../components/button'
import CourseCard from '../components/courseCard'
import Filter from '../components/filter'
import Layout from '../components/layout'
import { Ifilter } from '../types/types'

const categories = ['1', '2', '3', '4', '5', '6', '7', '8']
const courses = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
]

const Home: NextPage = () => {
  const [filter, setFilter] = useState<Ifilter>({
    categoryFilter: 'Todos',
    subcategoryFilter: 'Todos',
    levelFilter: 'Todos',
    priceFilter: 'Todos',
  })
  console.log(filter)
  const handleSubmit = () => {
    //apply filter
  }
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center overflow-x-hidden gap-y-2">
        <div
          className="w-full bg-center bg-cover h-96"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full gap-4 bg-gray-900 bg-opacity-50">
            <h1 className="text-4xl font-semibold text-center text-white uppercase  md:text-5xl">
              Title h2 - <br />
              banner cursos nuevos
            </h1>
            <div>
              <Button>Comprar ahora</Button>
            </div>
          </div>
        </div>
        <div className="w-10/12 text-2xl font-extrabold text-gray-900">
          Title H4 - Listado de categorias
        </div>
        <div className="w-10/12">
          <div className="grid grid-flow-col overflow-auto overflow-x-auto  gap-x-8">
            {categories.map((category) => {
              return (
                <div
                  key={category}
                  className="flex flex-col justify-end h-16 text-center bg-gray-300"
                >
                  <div className="py-2 font-bold">Categoria</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="w-10/12 text-2xl font-extrabold text-gray-900">
          Title H4 - Listado de cursos
        </div>
        <div className="w-10/12">
          <Filter
            onSubmit={() => handleSubmit()}
            filter={filter}
            setFilter={setFilter}
          />
        </div>

        <div className="grid w-10/12 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 ">
          {courses.map((course) => {
            return (
              <div key={course}>
                <CourseCard />
              </div>
            )
          })}
        </div>
        <div className="flex justify-end w-10/12">
          <div className="inline-flex items-center gap-x-4">
            <Button disabled={true} outline={true}>{'<'}</Button>
            <div>Página</div>
            <div className="relative w-full h-full">
              <select
              value="1"
                className="block w-full h-full pl-6 py-2 mr-12 leading-tight text-gray-600 bg-white border border-gray-400 rounded-lg appearance-none  focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option selected value="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className=" whitespace-nowrap">de 3</div>
            <Button outline={true}>{'>'}</Button>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
