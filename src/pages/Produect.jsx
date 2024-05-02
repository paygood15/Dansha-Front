import React from 'react'

import SwiperproductsLastRecent from '../swiper/Swiper-productsLastRecent';
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../store/ProductsSlice"
import { PostCart ,getCart} from "../store/CartSlice";
import {getAllCategories} from "../store/CategorySlice"
import img1 from "../assets/kalat-removebg-preview.png"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import i18n from 'i18next'
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const produect = () => {
  const navigate = useNavigate()
  const { product } = useSelector((state) => state.ProductsSlice);
  const { categories } = useSelector((state) => state.CategorySlice);
  const { t } = useTranslation();
  console.log(product);
  const { id } = useParams();
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(getSingleProduct(id));
  dispatch(getAllCategories());    

}, [dispatch, id]);

  return (


   <>
  <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
        {(() => {
   const category = categories?.data?.find(
     (category) => category?._id === product?.data?.category
  );
   return category ? category?.name : "Category Not Found";
})()}
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
        {i18n.language === 'ar'? product?.data?.titleAr:product?.data?.title}
        </h1>
        <div className="flex mb-4">
          <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">{t("Description")}</a>

        </div>
        <p className="leading-relaxed mb-4"> {i18n.language === 'ar'?  product?.data?.descriptionAr: product?.data?.description}</p>
        {/* <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Color</span>
          <span className="ml-auto text-gray-900">Blue</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Size</span>
          <span className="ml-auto text-gray-900">Medium</span>
        </div> */}
        <div className="flex border-t gap-1 border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">{t("Quantity")}</span>
          <span className="ml-auto text-gray-900">  {product?.data?.quantity}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="title-font font-medium text-2xl text-gray-900">{product?.data?.price} EGY</span>
          <button 
              onClick={() => {
                dispatch(PostCart(product?.data?._id)).then(() => {
                dispatch(getCart());
               });
          }}
          className="flex ml-auto text-white bg-gradient-to-r from-blue-500 to-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">{t("Add to Cart")}</button>
       
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 md:object-contain object-cover object-center rounded" src={img1}/>
    </div>
  </div>
</section>
 

<section className= "body-font">
  <div className="px-1 py-1 bg-black">
    <div className="lg:w-full   pr-2 pl-2 py-2 flex-col sm:flex-row sm:items-center  flex items-center mx-auto">
      <h1 className="flex-grow text-3xl	 sm:pr-16  font-bold title-font bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text">{t("Our Latest Products")}</h1>
      <button  onClick={()=> {
            navigate("/Shop")
          }} className="flex-shrink-0 text-gray-500 rounded-custom-dansha border border-gray-400 py-2 px-8 focus:outline-none hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white hover:border-transparent  text-lg mt-10 sm:mt-0  transition-all">{t("Show products")}</button>
    </div>
  </div>
</section>
   <SwiperproductsLastRecent />
   </>
  )
}

export default produect
