import Select from '../components/select'
import Button from '../components/button'
import { Ifilter } from '../types/types'
import { useState } from 'react'
import { IoOptionsOutline } from 'react-icons/io5'

// const categoryFilter =
// const subcategoryFilter =
const levelFilterOptions = [
  'Todos',
  'Introductorio',
  'Intermedio',
  'Avanzado',
  'Completo',
]
const priceFilterOptions = ['Todos', '30', '35', '40', '45', '50', '55']

const Filter = ({
  onClick,
  categories,
  subcategories,
  filter,
  setFilter,
}: {
  categories: string[]
  subcategories: string[]
  onClick: () => void
  filter: {
    categoryFilter: string
    subcategoryFilter: string
    levelFilter: string
    priceFilter: string
  }
  setFilter: (arg: Ifilter) => void
}) => {
  const [collapse, setCollapse] = useState(false)

  return (
    <>
      <div className="md:hidden">
        <Button
          outline={true}
          onClick={() => setCollapse((prevState) => !prevState)}
        >
          <div className="inline-flex items-center">
            <IoOptionsOutline />
            Filtrar por
          </div>
        </Button>
      </div>
      <form
        className={
          (collapse
            ? 'max-h-96 opacity-100'
            : ' opacity-0 max-h-0 -translate-y-4') +
          ' md:max-h-96 md:opacity-100 md:-translate-y-0 h-auto overflow-hidden flex flex-col md:flex-row md:items-center md:justify-center gap-2  transition-all ease-linear duration-300'
        }
      >
        <Select
          filter={filter}
          filterId={'categoryFilter'}
          setFilter={setFilter}
          label="CATEGORÍA"
          options={categories}
        />
        <Select
          filter={filter}
          filterId={'subcategoryFilter'}
          setFilter={setFilter}
          label="SUBCATEGORÍA"
          options={subcategories}
        />
        <Select
          filter={filter}
          filterId={'levelFilter'}
          setFilter={setFilter}
          label="NIVEL"
          options={levelFilterOptions}
        />
        <Select
          filter={filter}
          filterId={'priceFilter'}
          setFilter={setFilter}
          label="PRECIO"
          options={priceFilterOptions}
        />
        <div className="w-full">
          <div className="font-bold capitalize">&nbsp;</div>
          <Button type="button" onClick={onClick}>
            Aplicar filtros
          </Button>
        </div>
      </form>
    </>
  )
}

export default Filter
