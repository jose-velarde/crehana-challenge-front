import Link from 'next/link'

const AnimatedLink = ({
  path,
  pathText,
}: {
  path: string
  pathText: string
}) => {
  return (
    <div className="group ">
      <Link href={path}>
        <a>{pathText}</a>
      </Link>
      <div className="block w-0 h-1 m-auto -ml-5 transition-all ease-linear transform translate-x-5 bg-transparent content-none group-hover:bg-gray-900 group-hover:w-full" />
    </div>
  )
}

export default AnimatedLink
