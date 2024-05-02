import React, {  useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { loginUser } from "../store/authSlice"
import { useEffect } from "react";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import logo from "../assets/Dansha-logo-removebg-preview.png"
import { useTranslation } from 'react-i18next';
const Login = () => {
  const navigate = useNavigate()
  const { t } = useTranslation();

    const notifyError = () => toast.error("Incorrect email or password !"  );
    const notifySucces = () => toast.success("you login now welcome ");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { errorLogin } = useSelector((state) => state.authSlice);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(loginUser({ email, password }))
      
    };

  
    useEffect(() => {
      if (errorLogin === true) {
        notifyError();
      } else if (errorLogin === false) {
        notifySucces();
        window.location.href = "/"
      }
    }, [errorLogin]); // يتم تنفيذ هذا الأثر فقط عندما يتغير errorLogin
  return (
    <>
       

    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center  text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-full h-28 mr-2" src={logo} alt="logo"/>
         
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  {t("Sign in to your account")}
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Your email")}</label>
                      <input
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       type="email" 
                       name="email" 
                       id="email"
                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                       placeholder="name@company.com"
                       required/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Password")}</label>
                      <input
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       type="password"
                       name="password"
                       id="password"
                       placeholder="••••••••"
                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required />
                  </div>
                  <div className="flex items-center justify-between">
                     
                      {/* <a href="#" className="text-sm font-medium hover:underline bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text">Forgot password?</a> */}
                  </div>
                  <button type="submit" className="w-full text-white   focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-black hover:from-gray-600 duration-200">{t("Sign in")}</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link to={"/Register"}  className="font-medium hover:underline bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text">{t("Sign up")}</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section></>
  )
}

export default Login