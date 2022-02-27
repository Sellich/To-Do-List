
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/authReducer";
import c from "./Login.module.css"

const Login = () => {
   const dispatch = useDispatch()
   const { register, handleSubmit } = useForm();
   const onSubmit = (data) => {
      dispatch(loginThunk(data.login, data.password, data.rememberMe))
   }

   return (
      <div className={c.login}>
         <div className={c.header}>
            LOGIN
         </div>
         <div>
            <form onSubmit={handleSubmit(onSubmit)} className={c.form}>
               <div className={c.loginLabel, c.padding}>
                  <label> Login</label>
                  <input {...register('login')} className={c.loginInput, c.input} />
               </div>
               <div className={c.passwordForm, c.padding}>
                  <label> Password</label>
                  <input type="password" {...register('password')} className={c.passwordInput, c.input} />
               </div>
               <div className={c.rememberMeForm, c.padding}>
                  <label> Remember Me</label>
                  <input type="checkbox" {...register('rememberMe')} className={c.rememberMeInput, c.input} />
               </div>
               <div className={c.btnContainer}>
                  <button className={c.btn}>
                     Log In
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Login;