import { useState } from "react"
import { FakebookTitle } from "../icons/index"
import Register from "./Register"
import { loginSchema } from "../utils/validator";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useUserStore from '../stores/userStore'
import { toast } from "react-toastify";

function Login() {
  const [resetForm, setResetForm] = useState(false)
  const login = useUserStore(state => state.login)
  const user = useUserStore(state => state.user)

  const { handleSubmit, register, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur'
  });

  const hdlClose = () => {
    console.log('dialog close...')
    setResetForm(prv => !prv)
  }

  const hdlLogin = async data => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const resp = await login(data)
      toast.success(resp.data.message)
      localStorage.setItem('user',JSON.stringify(resp.data.user))
    } catch (err) {
      const errMsg = err.response?.data?.error || err.message
      toast.error(errMsg)
    }
  }

  return (
    <>
      <div className="h-[700px] pt-20 pb-28">
        <div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between max-md:flex-col">
          <div className="flex flex-col max-md: items-center max-md:text-center gap-4 mt-20 basis-3/5">
            <div className="text-4xl"><FakebookTitle />{user?.firstName}</div>
            <h2 className="text-[30px] max-md:text-[28px]  leading-8 mt-3 w-[514px]">
              Fakebook helps you connect and share with people in your life
            </h2>
          </div>
          <div className="bg-white flex-1">
            <div className="card bg-base-100 w-full h-[350px] shadow-xl mt-8">
              <form onSubmit={handleSubmit(hdlLogin)}>
                <fieldset disabled={isSubmitting}>
                  <div className="card-body">
                    <input type='text'
                      className="input w-full"
                      placeholder="E-mail or Phone number"
                      {...register('identity')}
                    />
                    {errors.identity && <p className="text-sm text-error">{errors.identity?.message}</p>}
                    <input type='password'
                      className="input w-full"
                      placeholder="password"
                      {...register('password')}
                    />
                    {errors.identity && <p className="text-sm text-error">{errors.password?.message}</p>}

                    {!isSubmitting && <button className="btn btn-primary text-xl">Login</button>}
                    {isSubmitting && <button className="btn btn-primary text-xl">Login
                      <span className="loading loading-spinner loading-xs"></span>
                    </button>}
                    <p className="text-center cursor-pointer opacity-70">Forgotten password</p>
                    <div className="divider my-0"></div>
                    <button type="button" className="btn btn-secondary text-lg"
                      onClick={() => document.getElementById("register-form").showModal()}
                    >Create new account</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
      <dialog id="register-form" className="modal" onClose={hdlClose}>
        <div className="modal-box">
          <Register resetForm={resetForm} />
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        </div>
      </dialog>
    </>
  )
}
export default Login