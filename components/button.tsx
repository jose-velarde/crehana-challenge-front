const Button = ({
  outline,
  disabled,
  children,
  className = '',
  type,
  onClick,
}: {
  outline?: boolean
  disabled?: boolean | undefined
  children: string | JSX.Element
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={
        disabled
          ? ' pointer-events-none w-full px-4 py-2 text-xl font-semibold text-gray-400 bg-white border-2 border-gray-400 rounded-xl '
          : (outline
              ? 'w-full px-4 py-2 text-xl font-semibold text-gray-900 transition-all duration-200 ease-linear bg-white border-2 border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white '
              : 'w-full px-4 py-2 text-xl font-semibold text-white transition-all duration-200 ease-linear bg-gray-900 rounded-xl hover:bg-gray-500 ') +
            className
      }
    >
      {children}
    </button>
  )
}

export default Button
