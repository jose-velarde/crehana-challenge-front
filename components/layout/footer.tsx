import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 justify-center items-center mt-4 w-full h-28 border-t">
      <div className="flex gap-1">
        <span>Made by</span>
        <a
          className="inline-flex gap-1 items-center"
          href="https://www.linkedin.com/in/jose-velarde/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>José</b>
          <FaLinkedin size={24} />
        </a>
      </div>
      <div className="flex gap-1">
        <span>Check the</span>
        <a
          className="inline-flex gap-1 items-center"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jose-velarde/crehana-challenge-front"
        >
          <b>front-end repo</b> <FaGithub size={24} />
        </a>
        <span>and the</span>
        <a
          className="inline-flex gap-1 items-center"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jose-velarde/crehana-challenge-back"
        >
          <b>back-end repo</b> <FaGithub size={24} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
