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
      <div className="block m-auto -ml-5 w-0 group-hover:w-full h-1 content-none bg-transparent group-hover:bg-gray-900 transition-all ease-linear translate-x-5" />
    </div>
  )
}

export default AnimatedLink
