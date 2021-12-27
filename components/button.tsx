const Button = ({
  outline,
  disabled,
  children,
  className = 'hover:bg-gray-600 bg-gray-900',
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
          : ' w-full px-4 py-2 text-xl font-semibold transition-all duration-200 ease-linear rounded-xl ' +
            (outline
              ? ' text-gray-900  bg-white border-2 border-gray-900 hover:bg-gray-900 hover:text-white '
              : ' text-white  ' + className)
      }
    >
      {children}
    </button>
  )
}

export default Button
