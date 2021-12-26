import Link from 'next/link'

const ButtonLink = ({
  path,
  pathText,
  outline,
}: {
  path: string
  pathText: string
  outline?: boolean
}) => {
  return (
    <Link href={path} passHref>
      <a
        className={
          outline
            ? 'px-4 py-2 text-center text-xl font-semibold text-gray-900 border-2 border-gray-900 transition-all duration-200 ease-linear bg-white rounded-xl hover:bg-gray-900 hover:text-white'
            : 'px-4 py-2 text-center text-xl font-semibold text-white transition-all duration-200 ease-linear bg-gray-900 rounded-xl hover:bg-gray-500'
        }
      >
        {pathText}
      </a>
    </Link>
  )
}

export default ButtonLink
