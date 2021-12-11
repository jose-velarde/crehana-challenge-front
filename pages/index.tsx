import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Button from '../components/button'
import CourseCard from '../components/courseCard'
import Filter from '../components/filter'
import Layout from '../components/layout'
import {
  Ifilter,
  Icourse,
  Ipage,
  Icategory,
  Isubcategory,
} from '../types/types'
import axios from 'axios'

axios.defaults.baseURL = process.env.API

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
        response.data.results.forEach(
          (category: Icategory) =>
            setCategories((prevState) => [
              ...prevState,
              category.category_name,
            ])
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
        response.data.results.forEach(
          (subcategory: Isubcategory) =>
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
  const getAndSet = ({
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
    getAndSet({ pageNumber: 1 })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changePage = (changeToPage: number) => {
    getAndSet({ pageNumber: changeToPage })
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

    getAndSet({ pageNumber: 1, filterString: filterToApply })
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
            <h1 className="text-4xl font-semibold text-center text-white uppercase md:text-5xl">
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
          <div className="grid grid-flow-col overflow-auto overflow-x-auto gap-x-8">
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
        <div className="w-10/12 text-2xl font-extrabold text-gray-900">
          Title H4 - Listado de cursos
        </div>
        <div className="w-10/12">
          <Filter
            onClick={() => applyFilter()}
            categories={categories}
            subcategories={subcategories}
            filter={filter}
            setFilter={setFilter}
          />
        </div>

        <div className="grid w-10/12 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 ">
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
            <div className="inline-flex items-center gap-x-4">
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
                  className="block w-full h-full py-2 pl-6 mr-12 leading-tight text-gray-600 bg-white border border-gray-400 rounded-lg appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  {[...Array(page.total_pages)].map((undef, page) => {
                    return (
                      <option key={page + 1} value={page + 1}>
                        {page + 1}
                      </option>
                    )
                  })}
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
    </Layout>
  )
}

export default Home
