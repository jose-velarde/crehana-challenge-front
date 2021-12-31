import React, { useState } from 'react'
import Image from 'next/image'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import Button from '../components/button'
import { Formik } from 'formik'
import * as Yup from 'yup'

const Login = () => {
  const [showPassword, setShowPasword] = useState(false)
  const [showConfirmPassword, setConfirmShowPasword] = useState(false)

  const [avatar, setAvatar] = useState()

  // const handleImageChange = (e: React.ChangeEvent) => {
  //   setPicture(URL.createObjectURL(e.target.files[0]))
  // }
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-white sm:bg-gray-200">
      <div className="py-8 px-8 sm:px-12 w-full xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 sm:h-auto bg-white shadow-none sm:shadow-lg">
        <div className="p-4 w-full text-3xl font-bold text-center text-gray-600">
          Registro
        </div>
        <div
          className="my-3 w-full bg-gray-200"
          style={{ height: '1px' }}
        ></div>
        <Formik
          initialValues={{
            avatar: '',
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
          }}
          validationSchema={Yup.object({
            username: Yup.string()
              .min(4, 'Mínimo de 4 caracteres')
              .max(30, 'Máximo de 30 caracteres')
              .required('Campo requerido'),
            email: Yup.string()
              .email('Email invalido')
              .required('Campo requerido'),
            password: Yup.string()
              .min(8, 'Debe tener 8 caracteres o más')
              .required('Campo requerido'),
            passwordConfirmation: Yup.string()
              .required('Confirmar contraseña')
              .oneOf(
                [Yup.ref('password'), null],
                'Las contraseñas deben coincidir'
              ),
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
                  <label className="text-gray-700">Avatar (Opcional)</label>
                  <div className="flex justify-center items-center w-full h-full">
                    <label htmlFor="avatar" className=" cursor-pointer">
                      <div className="flex justify-center items-center w-48 h-48 text-gray-600 bg-gray-400 rounded-full">
                        {avatar ? (
                          <Image
                            className="object-cover rounded-full"
                            alt="avatar"
                            src={avatar && avatar}
                            width={186}
                            height={186}
                          />
                        ) : (
                          <FaUser size={128} />
                        )}
                      </div>
                    </label>
                    <input
                      className="hidden"
                      type="file"
                      id="avatar"
                      name="avatar"
                      accept="image/*"
                      onChange={(e) => {
                        setAvatar(URL.createObjectURL(e.target.files[0]))
                      }}
                      // value={avatar}
                    />
                  </div>
                </div>
                <div className="relative w-full h-full">
                  {/* <FaAt className="absolute top-9 left-2 text-xl text-gray-600" /> */}
                  <label className="text-gray-700">Nombre de usuario</label>
                  <input
                    type="username"
                    name="username"
                    placeholder="Usuario"
                    className={
                      'py-2 pl-2 mt-0 w-full h-full border-0 border-b-2 border-gray-200 focus:ring-0 ' +
                      (errors.username && touched.username
                        ? 'focus:border-red-600 border-red-600'
                        : 'focus:border-black')
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  <span className=" text-red-600">
                    {errors.username && touched.username ? errors.username : ''}
                    &nbsp;
                  </span>
                </div>
                <div className="relative w-full h-full">
                  {/* <FaAt className="absolute top-9 left-2 text-xl text-gray-600" /> */}
                  <label className="text-gray-700">Dirección de correo</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={
                      'py-2 pl-2 mt-0 w-full h-full border-0 border-b-2 border-gray-200 focus:ring-0 ' +
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
                  <label className="text-gray-700">Contraseña</label>
                  {/* <FaLock className="absolute top-9 left-2 text-xl text-gray-600" /> */}
                  <button
                    type="button"
                    onClick={() => setShowPasword((prevState) => !prevState)}
                    className="absolute top-9 right-2"
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
                      'py-2 pl-2 mt-0 w-full h-full border-0 border-b-2 border-gray-200 focus:ring-0 ' +
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
                </div>
                <div className="relative w-full h-full">
                  <label className="text-gray-700">Confirmar contraseña</label>
                  {/* <FaLock className="absolute top-9 left-2 text-xl text-gray-600" /> */}
                  <button
                    type="button"
                    onClick={() =>
                      setConfirmShowPasword((prevState) => !prevState)
                    }
                    className="absolute top-9 right-2"
                  >
                    {showConfirmPassword ? (
                      <FaEye className=" text-xl text-gray-600" />
                    ) : (
                      <FaEyeSlash className=" text-xl text-gray-600" />
                    )}
                  </button>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="passwordConfirmation"
                    className={
                      'py-2 pl-2 mt-0 w-full h-full border-0 border-b-2 border-gray-200 focus:ring-0 ' +
                      (errors.passwordConfirmation &&
                      touched.passwordConfirmation
                        ? 'focus:border-red-600'
                        : 'focus:border-black')
                    }
                    placeholder="Contraseña"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirmation}
                  />

                  {errors.passwordConfirmation &&
                  touched.passwordConfirmation ? (
                    <span className=" text-red-600">
                      {errors.passwordConfirmation}
                    </span>
                  ) : values.password === values.passwordConfirmation &&
                    values.passwordConfirmation !== '' ? (
                    <span className=" text-green-600">
                      Las contraseñas coinciden
                    </span>
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </div>
                <div className="flex flex-row gap-2 w-full">
                  <Button type="submit" disabled={isSubmitting}>
                    Enviar
                  </Button>
                </div>
                <div className="flex flex-row justify-center my-2">
                  <span className="absolute px-4 bg-white"></span>
                  <div
                    className="mt-3 w-full bg-gray-200"
                    style={{ height: '1px' }}
                  ></div>
                </div>
                <div className="flex flex-col gap-2 w-full"></div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login
