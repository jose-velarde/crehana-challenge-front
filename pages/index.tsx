import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Button from '../components/button'
import CourseCard from '../components/home/courseCard'
import Filter from '../components/home/filter'
import {
  Ifilter,
  Icourse,
  Ipage,
  Icategory,
  Isubcategory,
} from '../types/types'
import axios from 'axios'

const Home: NextPage = () => {
  const [courses, setCourses] = useState<Icourse[]>([])
  const [categories, setCategories] = useState<string[]>(['Todos'])
  const [subcategories, setSubcategories] = useState<string[]>(['Todos'])
  const [page, setPage] = useState<Ipage>({
    current_page: 1,
    total_pages: 1,
    next_page: 2,
    previous_page: 1,
  })
  const [filter, setFilter] = useState<Ifilter>({
    categoryFilter: 'Todos',
    subcategoryFilter: 'Todos',
    levelFilter: 'Todos',
    priceFilter: 'Todos',
  })

  const getCategories = () => {
    axios
      .get('categories/')
      .then((response) => {
        response.data.results.forEach((category: Icategory) =>
          setCategories((prevState) => [...prevState, category.category_name])
        )
      })
      .catch((error) => {
        console.error(error)
        setCategories(['Todos'])
      })
  }
  const getSubcategories = () => {
    axios
      .get('subcategories/')
      .then((response) => {
        response.data.results.forEach((subcategory: Isubcategory) =>
          setSubcategories((prevState) => [
            ...prevState,
            subcategory.subcategory_name,
          ])
        )
      })
      .catch((error) => {
        console.error(error)
        setSubcategories(['Todos'])
      })
  }
  const getCourses = ({
    pageNumber,
    filterString = '',
  }: {
    pageNumber: number
    filterString?: string
  }) => {
    axios
      .get('courses/?page=' + pageNumber + filterString)
      .then((response) => {
        setPage({
          ...page,
          current_page: response.data.page_number,
          total_pages: response.data.total_pages,
          next_page: response.data.next,
          previous_page: response.data.previous,
        })
        setCourses(response.data.results)
      })
      .catch((error) => {
        console.error(error)
        setCourses([])
      })
  }
  useEffect(() => {
    getCategories()
    getSubcategories()
    getCourses({ pageNumber: 1 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changePage = (changeToPage: number) => {
    getCourses({ pageNumber: changeToPage })
  }
  const applyFilter = () => {
    let categoryFilterString = ''
    let subcategoryFilterString = ''
    let levelFilterString = ''
    let priceFilterString = ''

    if (filter.categoryFilter != 'Todos') {
      categoryFilterString = '&category__category_name=' + filter.categoryFilter
    }
    if (filter.subcategoryFilter != 'Todos') {
      subcategoryFilterString =
        '&subcategory__subcategory_name=' + filter.subcategoryFilter
    }
    if (filter.levelFilter != 'Todos') {
      levelFilterString = '&level=' + filter.levelFilter
    }
    if (filter.priceFilter != 'Todos') {
      priceFilterString = '&price_lte=' + filter.priceFilter
    }

    const filterToApply =
      categoryFilterString +
      subcategoryFilterString +
      levelFilterString +
      priceFilterString

    getCourses({ pageNumber: 1, filterString: filterToApply })
  }

  return (
    <main className="flex overflow-x-hidden flex-col gap-y-2 justify-center items-center">
      <div
        className="w-full h-96 bg-center bg-cover"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
        }}
      >
        <div className="flex flex-col gap-4 justify-center items-center w-full h-full bg-gray-900 bg-opacity-50">
          <h2 className="md:text-5xl text-center text-white uppercase">
            Title h2 - <br />
            banner cursos nuevos
          </h2>
          <div>
            <Button>Comprar ahora</Button>
          </div>
        </div>
      </div>
      <h4 className="w-10/12">Title H4 - Listado de categorias</h4>
      <div className="w-10/12">
        <div className="grid overflow-auto overflow-x-auto grid-flow-col gap-x-8">
          {categories.map((category, index) => {
            return (
              <div
                key={category + index}
                className="flex flex-col justify-end h-16 text-center bg-gray-300"
              >
                <div className="py-2 font-bold">{category}</div>
              </div>
            )
          })}
        </div>
      </div>
      <h4 className="w-10/12">Title H4 - Listado de cursos</h4>
      <div className="w-10/12">
        <Filter
          onClick={() => applyFilter()}
          categories={categories}
          subcategories={subcategories}
          filter={filter}
          setFilter={setFilter}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 w-10/12">
        {courses.map((course) => {
          return (
            <div key={course.id}>
              <CourseCard cardData={course} />
            </div>
          )
        })}
      </div>
      <div className="flex justify-end w-10/12">
        {page.total_pages == 1 ? null : (
          <div className="inline-flex gap-x-4 items-center">
            <Button
              onClick={() => changePage(page.previous_page)}
              disabled={!page.previous_page}
              outline={true}
            >
              {'<'}
            </Button>
            <div>Página</div>
            <div className="relative w-full h-full">
              <select
                onChange={(e) => changePage(Number(e.target.value))}
                value={page.current_page}
                className="block py-2 pl-6 mr-12 w-full h-full leading-tight text-gray-600 bg-white focus:bg-white rounded-lg border border-gray-400 focus:border-gray-500 focus:outline-none appearance-none"
              >
                {[...Array(page.total_pages)].map((undef, page) => {
                  return (
                    <option key={page + 1} value={page + 1}>
                      {page + 1}
                    </option>
                  )
                })}
              </select>
              <div className="flex absolute inset-y-0 right-0 items-center px-2 text-gray-400 pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className=" whitespace-nowrap">de {page.total_pages}</div>
            <Button
              onClick={() => changePage(page.next_page)}
              disabled={!page.next_page}
              outline={true}
            >
              {'>'}
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}

export default Home
