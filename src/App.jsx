
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import CategortySwiper from "./swiper/Category-Swiper"

// import SwiperproductsLastRecent from "./swiper/Swiper-productsLastRecent";
import img1 from "./assets/kalat-removebg-preview.png"
import img2 from "./assets/Dansha-logo-removebg-preview.png"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import  Loading from "./utils/LoadingTwo"
import { Link } from 'react-router-dom';

import {getAllCategories} from "./store/CategorySlice"
import {getAllProducts} from "./store/ProductsSlice"
import { PostCart ,getCart} from "./store/CartSlice";



import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import translationAR from './locales/translationAR.json';
import translationEN from './locales/translationEN.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: translationAR,
      },
      en: {
        translation: translationEN,
      },
    },
    lng: 'ar', // default language
    fallbackLng: 'ar', // fallback language
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
  });

  

const App= ()=> {
  const { t } = useTranslation();
  const userToken = localStorage.getItem("userToken")
  const navigate = useNavigate()
  const notifyError = () => toast.error("not send product !" );
  const notifySucces = () => toast.success("Add products Successful ");
  const dispatch = useDispatch();
  const { products,loading } = useSelector((state) => state.ProductsSlice);
  const { categories,loadingCategories } = useSelector((state) => state.CategorySlice);
  const { error } = useSelector((state) => state.CartSlice);
  const LastFourItems = products?.data?.slice(0, 4);

console.log(LastFourItems)

useEffect(() => {
  {i18n.language === 'ar'? document.body.dir = "rtl":document.body.dir = "ltr"}
     dispatch(getAllProducts());  
     dispatch(getAllCategories());   
}, [dispatch]);
  return (
    <> 

  
 {/* start home section */}
  
<section className="text-white cssgo bg-black body-font">
  <div className="container mx-auto flex px-5 py-5 py-bg md:flex-row flex-col items-center">
 
    <div className={`  ${i18n.language === 'ar'? "md:text-right":"md:text-left"} lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start  mb-16 md:mb-0 items-center text-center`}>
      <p className={ ` ${i18n.language === 'ar'? "font-extrabold":"font-medium"} title-font  text-[28px] mb-4  bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text`}>{t("Our unique products are mainly  esigned to combine the elegance with the high quality technology")}
        
      </p>
      <p className={` ${i18n.language === 'ar'? "font-extrabold":""} mb-8 leading-relaxed`}>{t("Take a chance to try one of our products to add a piece of art to your kitchen")}</p>
      <div className={`flex justify-center ${i18n.language === 'ar'? "gap-4":""}`}>
        <button onClick={()=> {
            navigate("/Shop")
          }} className="inline-flex rounded-custom-dansha text-white bg-gradient-to-r from-blue-500 to-purple-500 border-0  py-2 px-6 focus:outline-none hover:bg-black hover:from-gray-600 duration-200 hover:scale-105  text-lg">{t("Show products")}</button>
        <button onClick={()=> {
            navigate("/AboutMe")
          }} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r from-blue-500 rounded-custom-dansha transition-all duration-300 hover:scale-105  text-lg">{t("About Us")}</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={img2}/>
    </div>
  </div>
</section>

 {/* end home section */}
   {/* start swiper section */}

   <section className= "body-font">
  <div className="px-1 py-1 bg-black">
    <div className="lg:w-full   pr-2 pl-2 py-2 flex-col sm:flex-row sm:items-center  flex items-center mx-auto">
      <h1 className="flex-grow text-3xl	 sm:pr-16  font-bold title-font bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text">{t("Our Category")}</h1>
      <button onClick={()=> {
            navigate("/Shop")
          }} className="flex-shrink-0 text-gray-500 rounded-custom-dansha border border-gray-400 py-2 px-8 focus:outline-none hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white hover:border-transparent  text-lg mt-10 sm:mt-0  transition-all">{t("Show products")}</button>
    </div>
  </div>
</section>

    <CategortySwiper />

    
    {/* end swiper section */}

   {/* start ecommerc */ }

    {/* start head text ecommerc */}
    <section className= "body-font">
  <div className="py-5 px-3">
    <div className="lg:w-full   pr-2 pl-2 flex-col sm:flex-row sm:items-center  flex items-center mx-auto">
      <h1 className="flex-grow text-3xl	font-bold sm:pr-16  title-font bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text">{t("Products Dansha Store")}</h1>
      <button onClick={()=> {
            navigate("/Shop")
          }} className="flex-shrink-0 text-gray-500 rounded-custom-dansha border border-gray-400 py-2 px-8 focus:outline-none hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white hover:border-transparent  text-lg mt-10 sm:mt-0  transition-all">{t("Show products")}</button>
    </div>
  </div>
</section>
{/* end head text ecommerc */}
   <section className="text-white body-font">
  <div className="container px-11 py-3 mx-auto">
{loading? <Loading/>:    <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  max-sm:grid-cols-1 gap-3  -m-4">
      {LastFourItems?.map((product)=> (
  <div key={product._id} className=" p-4 w-full rounded shadow-md">
  <Link to={`/Produect/${product._id}`} className="block relative h-48 rounded overflow-hidden">
    <img alt="ecommerce" className="object-contain  object-center w-full h-full block" src={img1}/>
  </Link>
  {/* src={product.imageCover} */}
  <div className="mt-4">
    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
    {(() => {
   const category = categories?.data?.find(
     (category) => category?._id === product?.category
  );
   return category ? category?.name : "Category Not Found";
})()}
    </h3>
    <h2 className="text-gray-900 title-font text-lg font-medium">{i18n.language === 'ar'? product.titleAr:product.title}</h2>
    <div className="flex justify-between items-center py-4">
         <p className="mt-1 text-black font-bold">{product.price} EGY</p>
         <button
               onClick={() => {
              {userToken?   dispatch(PostCart(product._id)).then(() => {
                dispatch(getCart());
                if (error) {
                    notifyError();
                } else {
                    notifySucces();
                }
            }) : toast.error("Please Login First!")}
            }}
     
           className={`        ${i18n.language === 'ar'? "text-sm":"text-lg"}inline-flex hover:scale-105 rounded-custom-dansha text-white bg-gradient-to-r from-blue-500 to-purple-500 border-0 py-2 px-3 focus:outline-none  hover:bg-black hover:from-gray-600 transition-all`}>
           {t("Add to Cart")}
          </button>

         </div>
  </div>
</div>
      ))}
    


    </div>}
  </div>
</section>




   {/* end ecommerc */ }

   {/* boxes section  */}
   <section className=" body-font">
  <div className="container px-5  pt-8 pb-16 mx-auto">
    <div className="flex flex-col text-center w-full mb-6">
      <h2 className="text-4xl   bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text  tracking-widest font-bold title-font mb-1">{t("About our services")}</h2>
    </div>
    <div className="flex flex-wrap -m-4 sm:w-full ">
      <div className="p-4 lg:w-1/4 md:w-1/2 max-sm:w-full sm:w-full max-sm:justify-center">
        <div className="flex rounded-lg border-solid	duration-300 hover:shadow-2xl transition-all border border-b-blue-500 border-l-blue-500 border-r-purple-500 border-t-purple-500 bg-148 bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
           
            <h2 className="text-gray-900 text-lg title-font font-medium">{t("FREE DELIVERY")}</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">{t("Free shipping on all order")}</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">{t("Learn More")}
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2 max-sm:w-full sm:w-full max-sm:justify-center">
<div className="flex rounded-lg border-solid	duration-300 hover:shadow-2xl transition-all border border-b-blue-500 border-l-blue-500 border-r-purple-500 border-t-purple-500 bg-148 bg-gray-100 p-8 flex-col">          <div className="flex items-center mb-3">
            
            <h2 className="text-gray-900 text-lg title-font font-medium">
{t("RETURNS")}</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">{t("Back guarantee under 7 days")}</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">{t("Learn More")}
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2 max-sm:w-full sm:w-full max-sm:justify-center">
<div className="flex rounded-lg border-solid	duration-300 hover:shadow-2xl transition-all border border-b-blue-500 border-l-blue-500 border-r-purple-500 border-t-purple-500 bg-148 bg-gray-100 p-8 flex-col">          <div className="flex items-center mb-3">
            
            <h2 className="text-gray-900 text-lg title-font font-medium">
{t("SUPPORT 24/7")}</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">{t("Support online 24 hours a day")}</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">{t("Learn More")}
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2 max-sm:w-full sm:w-full max-sm:justify-center">
<div className="flex rounded-lg border-solid	duration-300 hover:shadow-2xl transition-all border border-b-blue-500 border-l-blue-500 border-r-purple-500 border-t-purple-500 bg-148 bg-gray-100 p-8 flex-col">          <div className="flex items-center mb-3">
         
            <h2 className="text-gray-900 text-lg title-font font-medium">{t("PAYMENTS")}
</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">{t("100% payment security")}</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">{t("Learn More")}
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* end boxes section  */}
{/* start swiper section */}
{/* 
<section className= "body-font">
  <div className="px-1 py-4 bg-black">
    <div className="lg:w-full   pr-2 pl-2 flex-col sm:flex-row sm:items-center  flex items-center mx-auto">
      <h1 className="flex-grow text-3xl	 sm:pr-16  font-bold title-font bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text">{t("Our Latest Products")}</h1>
      <button onClick={()=> {
            navigate("/Shop")
          }} className="flex-shrink-0 text-gray-500 rounded-custom-dansha border border-gray-400 py-2 px-8 focus:outline-none hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white hover:border-transparent  text-lg mt-10 sm:mt-0  transition-all">{t("Show products")}</button>
    </div>
  </div>
</section> */}


     {/* <SwiperproductsLastRecent /> */}
    
    {/* end swiper section */}
     
     {/* start section statixc */}
     <section className= "body-font">
  <div className="px-1 py-4 bg-black">
    <div className="lg:w-full   pr-2 pl-2 flex-col sm:flex-row sm:items-center  flex items-center mx-auto">
      <h1 className="flex-grow text-3xl	 sm:pr-16  font-bold title-font bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text">{t("clients")}</h1>
      <button onClick={()=> {
            navigate("/Shop")
          }} className="flex-shrink-0 text-gray-500 rounded-custom-dansha border border-gray-400 py-2 px-8 focus:outline-none hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white hover:border-transparent  text-lg mt-10 sm:mt-0  transition-all">{t("Show products")}</button>
    </div>
  </div>
</section> 
     <section className="text-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="grid-cols-4 max-sm:grid-cols-2 max-sm:items-center gap-2 grid p-2 -m-4 text-center ">
      <div className="p-4  bg-148 rounded">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-blue-500">2.7K</h2>
        <p className="leading-relaxed text-black font-bold">{t("Users")}</p>
      </div>
      <div className="p-4  bg-148 rounded ">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-purple-500">1.8K</h2>
        <p className="leading-relaxed text-black font-bold">{t("Subscribes")}</p>
      </div>
      <div className="p-4   bg-148 rounded">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-blue-500 ">35</h2>
        <p className="leading-relaxed text-black font-bold">{t("Downloads")}</p>
      </div>
      <div className="p-4   bg-148 rounded ">
        <h2 className="title-font font-medium sm:text-4xl text-3xl  text-purple-500">8</h2>
        <p className="leading-relaxed text-black font-bold">{t("Products")}</p>
      </div>
    </div>
  </div>
</section>


      {/* end section statixc */}




 



   </>
  )
}

export default App
