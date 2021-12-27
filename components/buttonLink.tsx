import Link from 'next/link'

const ButtonLink = ({
  path,
  children,
  className,
  outline,
}: {
  path: string
  children: string | JSX.Element
  className?: string
  outline?: boolean
}) => {
  return (
    <Link href={path} passHref>
      <a
        className={
          (outline
            ? 'px-4 py-2 text-center text-xl font-semibold text-gray-900 border-2 border-gray-900 transition-all duration-200 ease-linear bg-white rounded-xl hover:bg-gray-900 hover:text-white '
            : 'px-4 py-2 text-center text-xl font-semibold text-white transition-all duration-200 ease-linear bg-gray-900 rounded-xl hover:bg-gray-600 ') +
          className
        }
      >
        {children}
      </a>
    </Link>
  )
}

export default ButtonLink
