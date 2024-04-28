import React, {  useState } from "react";
import logo from "../assets/Dansha-logo-removebg-preview.png"
import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { registerUser } from "../store/authSlice"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from 'react-i18next';
const Register = () => {
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [phone, setPhone] = useState("");

    const dispatch = useDispatch();
    const { errorReg } = useSelector((state) => state.authSlice);


    
        const handleSubmit = (e) => {
            e.preventDefault();
            if (password.length < 6) {
                alert("password must be longer than or equal to 6 characters");
                return;
              } else if (password !== passwordConfirm) {
                alert("Password mismatch");
                return;
              } else dispatch(registerUser({ name ,email ,password ,passwordConfirm , phone }));
        
          };
          useEffect(() => {
            if (errorReg === true) {
                toast.error("please entry correct data");
            } else if (errorReg === false) {
                toast.success("Success regester");
                window.location.href = "/Login";
            }
          }, [errorReg]); // يتم تنفيذ هذا الأثر فقط عندما يتغير errorLogin
     
  return (
   <>
   <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-135vh  lg:py-0">
      <a href="#" class="flex items-center  text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-full h-24 mr-2" src={logo} alt="logo"/>
         
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 {t("Create and account")}
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Your name")}</label>
                      <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                     
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="your name" 
                      required/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Your email")}</label>
                      <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
               
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="name@company.com" 
                      required/>
                  </div>
                  <div>
                      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Your phone")}</label>
                      <input 
                      type="text" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="your phone" 
                      required/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Password")}</label>
                      <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  
                     
                       placeholder="••••••••" 
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                       required/>
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Confirm password")}</label>
                      <input 
                      type="password"  
                     
                      value={passwordConfirm}
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                
                      placeholder="••••••••"
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                       required/>
                  </div>
                  {/* <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div> */}
                  <button type="submit" class="w-full text-white bg-gradient-to-r from-blue-500 to-purple-500 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-black hover:from-gray-600 duration-200  ">{t("Create and account")}</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to={"/Login"}  class="font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
   </>
  )
}

export default Register