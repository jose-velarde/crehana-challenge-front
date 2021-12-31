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
          {options.map((option, index) => {
            return (
              <option key={option + index} value={option}>
                {option}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default Select
