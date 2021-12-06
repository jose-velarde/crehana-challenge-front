import Link from 'next/link'
import { FaGlobe } from 'react-icons/fa'
import AnimatedLink from './animatedLink'
import ButtonLink from './buttonLink'

const Header = () => {
  return (
    <div className="w-full">
      <header className="dark:bg-gray-700">
        <nav className="flex justify-between w-full p-4 text-xl dark:text-white dark:bg-gray-900">
          <Link href="/">
            <a className="inline-flex items-center text-2xl font-bold tracking-wider gap-x-2">
              <FaGlobe />
              Crashcourse
            </a>
          </Link>
          <div className="flex md:items-center md:w-auto gap-x-6">
            <div className="hidden md:flex gap-x-4">
              <AnimatedLink path="/" pathText="Home" />
              <AnimatedLink path="/staff" pathText="Staff" />
              <AnimatedLink path="/about" pathText="About" />
              <AnimatedLink path="/contact" pathText="Contact" />
            </div>
            <div className="flex gap-x-2 ">
              <ButtonLink path="/login" pathText="Log in" />
              <ButtonLink outline={true} path="/signup" pathText="Sign Up" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
