import React from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getOneCategorey,getAllCategories} from "../store/CategorySlice"
import { PostCart ,getCart} from "../store/CartSlice";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useTranslation  } from 'react-i18next';
import img1 from "../assets/kalat-removebg-preview.png"
import i18n from 'i18next'
const OneCategory = () => {
  const { t } = useTranslation();
  const userToken = localStorage.getItem("userToken")
  const navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch();
    const { OneCategorey } = useSelector((state) => state.CategorySlice);
    const { categories } = useSelector((state) => state.CategorySlice);
    console.log(OneCategorey)

useEffect(() => {
       dispatch(getOneCategorey(id));  
       dispatch(getAllCategories());  

  }, [dispatch]);
  return (
    <>
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
   <section className="text-white py-5 body-font">
  <div className="container px-11 py-3 mx-auto">
    <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  max-sm:grid-cols-1 gap-3  -m-4">

  {OneCategorey?.data?.map((Producet,index)=> (
    <div key={index + 1} className=" p-4 w-full rounded shadow-md">
    <Link to={`/Produect/${Producet._id}`} className="block relative h-48 rounded overflow-hidden">
      <img alt="ecommerce" className="object-contain  object-center w-full h-full block" src={img1}/>
      {/* src={Producet.imageCover} */}
    </Link>
    <div className="mt-4">
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
      {(() => {
   const category = categories?.data?.find(
     (category) => category?._id === Producet?.category
  );
   return category ? category?.name : "Category Not Found";
})()}
      </h3>
      <h2 className="text-gray-900 title-font text-lg font-medium">{i18n.language === 'ar'? Producet.titleAr:Producet.title}</h2>
      <div classNameName="flex justify-between items-center py-4">
           <p classNameName="mt-1 text-black ">{Producet.price} EGY</p>
           <button 
           onClick={() => {
           {userToken?  dispatch(PostCart(Producet._id)).then(() => {
            dispatch(getCart());
           }):toast.error("Please Login First!")}
      }}
    
           classNameName={`  ${i18n.language === 'ar'? "text-sm":"text-lg"} inline-flex hover:scale-105 rounded-custom-dansha text-white bg-gradient-to-r from-blue-500 to-purple-500 border-0 py-2 px-3 focus:outline-none  text-lg  hover:bg-black hover:from-gray-600 transition-all`}>{t("Add to Cart")}</button>
           </div>
    </div>
  </div>
  ))}
  
     
   
    </div>
  </div>
</section>
    </>
  )
}

export default OneCategory