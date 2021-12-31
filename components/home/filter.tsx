import Select from './select'
import Button from '../button'
import { Ifilter } from '../../types/types'
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
  return (
    <>
      <input
        type="checkbox"
        className="peer hidden"
        id="filter-collapse-button"
        name="filter-collapse"
      />
      <label htmlFor="filter-collapse-button" className="block md:hidden">
        <Button className=" active:pointer-events-none " outline={true}>
          <div className="inline-flex items-center">
            <IoOptionsOutline />
            Filtrar por
          </div>
        </Button>
      </label>
      <form
        className={
          'opacity-0 max-h-0 -translate-y-4 md:max-h-96 md:opacity-100 md:-translate-y-0 h-auto overflow-hidden flex ' +
          'flex-col md:flex-row md:items-center transition-all md:justify-center gap-2 ease-linear duration-300 ' +
          'peer-checked:max-h-96 peer-checked:opacity-100 peer-checked:translate-y-0 '
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
