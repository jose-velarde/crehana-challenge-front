import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  FaAt,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLock,
} from 'react-icons/fa'
import Button from '../components/button'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

axios.defaults.withCredentials = true

const Login = () => {
  const [showPassword, setShowPasword] = useState(false)
  const [csrfToken, setCrsfToken] = useState('')

  useEffect(() => {
    axios
      .get(process.env.AUTH + 'crsf')
      .then((res)=>{
        const token = res.headers["X-CSRFToken"]
        console.log(res)
        setCrsfToken(token)
      })
      .catch((err)=>{
        console.error(err)
      })
  }, [])
  console.log(csrfToken)
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-white sm:bg-gray-200">
      <div className="py-8 px-8 sm:px-12 w-full xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 sm:h-auto bg-white shadow-none sm:shadow-lg">
        <div className="p-4 w-full text-3xl font-bold text-center text-gray-600">
          Iniciar sesión
        </div>
        <div
          className="my-3 w-full bg-gray-200"
          style={{ height: '1px' }}
        ></div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Email invalido')
              .required('Campo requerido'),
            password: Yup.string()
              .min(8, 'Debe tener 8 caracteres o más')
              .required('Campo requerido'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            setSubmitting(false)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <form>
              <div className="flex flex-col gap-4 py-4 px-0">
                <div className="relative w-full h-full">
                  {/* <label className="text-gray-700">Email address</label> */}
                  <FaAt className="absolute top-2 left-2 text-xl text-gray-600" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={
                      'py-2 pl-10 mt-0 w-full h-full border-0 border-b-2 border-gray-200 focus:ring-0 ' +
                      (errors.email && touched.email
                        ? 'focus:border-red-600 border-red-600'
                        : 'focus:border-black')
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <span className=" text-red-600">
                    {errors.email && touched.email ? errors.email : ''} &nbsp;
                  </span>
                </div>
                <div className="relative w-full h-full">
                  {/* <label className="text-gray-700">Password</label> */}
                  <FaLock className="absolute top-2 left-2 text-xl text-gray-600" />
                  <button
                    type="button"
                    onClick={() => setShowPasword((prevState) => !prevState)}
                    className="absolute top-2 right-2"
                  >
                    {showPassword ? (
                      <FaEye className=" text-xl text-gray-600" />
                    ) : (
                      <FaEyeSlash className=" text-xl text-gray-600" />
                    )}
                  </button>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className={
                      'py-2 pl-10 mt-0 w-full h-full border-0 border-b-2 border-gray-200 focus:ring-0 ' +
                      (errors.password && touched.password
                        ? 'focus:border-red-600'
                        : 'focus:border-black')
                    }
                    placeholder="Contraseña"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <span className=" text-red-600">
                    {errors.password && touched.password ? errors.password : ''}
                    &nbsp;
                  </span>

                  <div className="flex flex-row justify-end w-full">
                    <Link href="/forgot">
                      <a>Olvide mi contraseña</a>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full">
                  <Button type="submit" disabled={isSubmitting}>
                    Login
                  </Button>
                </div>
                <div className="flex gap-1 self-center">
                  No tienes una cuenta?
                  <Link href="/signup">
                    <a className="font-semibold">Regístrate</a>
                  </Link>
                </div>
                <div className="flex flex-row justify-center my-2">
                  <span className="absolute px-4 bg-white">o</span>
                  <div
                    className="mt-3 w-full bg-gray-200"
                    style={{ height: '1px' }}
                  ></div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <Button type="button" className="bg-red-500 hover:bg-red-700">
                    <div className="inline-flex gap-2 items-center">
                      <FaGoogle />
                      Acceder con Google
                    </div>
                  </Button>
                  <Button className=" bg-blue-600 hover:bg-blue-700">
                    <div className="inline-flex gap-2 items-center">
                      <FaFacebook />
                      Acceder con Facebook
                    </div>
                  </Button>
                  <Button className=" bg-gray-700 hover:bg-gray-600">
                    <div className="inline-flex gap-2 items-center">
                      <FaGithub />
                      Acceder con Github
                    </div>
                  </Button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login
