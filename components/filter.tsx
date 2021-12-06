import Select from '../components/select'
import Button from '../components/button'
import { Ifilter } from '../types/types'
import { useState } from 'react'
import { IoOptionsOutline } from 'react-icons/io5'

const categorias = [
  'Categoría 1',
  'Categoría 2',
  'Categoría 3',
  'Categoría 4',
  'Categoría 5',
]

const Filter = ({
  onSubmit,
  filter,
  setFilter,
}: {
  onSubmit: () => void
  filter: {
    categoryFilter: string
    subcategoryFilter: string
    levelFilter: string
    priceFilter: string
  }
  setFilter: (arg: Ifilter) => void
}) => {
  const [collapse, setCollapse] = useState(false)
  console.log(collapse)
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
        onSubmit={onSubmit}
        className={
          (collapse ? 'max-h-96' : 'max-h-0') +
          ' md:max-h-96 max-h-0 h-auto overflow-hidden flex flex-col md:flex-row md:items-center md:justify-center gap-2 transition-maxHeight ease-linear duration-300'
        }
      >
        <Select
          filter={filter}
          filterId={'categoryFilter'}
          setFilter={setFilter}
          label="CATEGORÍA"
          options={categorias}
        />
        <Select
          filter={filter}
          filterId={'subcategoryFilter'}
          setFilter={setFilter}
          label="SUBCATEGORÍA"
          options={categorias}
        />
        <Select
          filter={filter}
          filterId={'levelFilter'}
          setFilter={setFilter}
          label="NIVEL"
          options={categorias}
        />
        <Select
          filter={filter}
          filterId={'priceFilter'}
          setFilter={setFilter}
          label="PRECIO"
          options={categorias}
        />
        <div className="w-full">
          <div className="font-bold capitalize">&nbsp;</div>
          <Button type="submit">Aplicar filtros</Button>
        </div>
      </form>
    </>
  )
}

export default Filter
