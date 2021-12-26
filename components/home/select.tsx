interface Ifilter {
  categoryFilter: string
  subcategoryFilter: string
  levelFilter: string
  priceFilter: string
}

const Select = ({
  label,
  options,
  filter,
  filterId,
  setFilter,
}: {
  label: string
  options: string[]
  filter: Ifilter
  filterId:
    | 'categoryFilter'
    | 'subcategoryFilter'
    | 'levelFilter'
    | 'priceFilter'
  setFilter: (arg: Ifilter) => void
}) => {
  return (
    <div className="w-full">
      <label htmlFor={label} className="font-bold capitalize">
        {label}
      </label>
      <div className="relative">
        <select
          value={filter[filterId]}
          onChange={(e) => setFilter({ ...filter, [filterId]: e.target.value })}
          id={label}
          className="block py-2 px-4 pr-8 w-full h-full leading-tight text-gray-600 bg-white focus:bg-white rounded-lg border border-gray-400 focus:border-gray-500 focus:outline-none appearance-none"
        >
          {options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
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
    </div>
  )
}

export default Select
