import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getAllProducts} from "../store/ProductsSlice"
import {getAllCategories} from "../store/CategorySlice"
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { PostCart ,getCart} from "../store/CartSlice";
import img1 from "../assets/kalat-removebg-preview.png"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import required modules
import { Navigation } from 'swiper/modules';


import { useTranslation } from 'react-i18next';


import i18n from 'i18next';
const SwiperproductsLastRecent = () => {
  const { t } = useTranslation();
  const userToken = localStorage.getItem("userToken")
  const [direction, setDirection] = useState('ltr');
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.ProductsSlice);
    const { categories } = useSelector((state) => state.CategorySlice);
    const LastEightItems = products?.data?.slice(2, 8);
    console.log(LastEightItems)

  useEffect(() => {
  
       dispatch(getAllProducts());  
       dispatch(getAllCategories()); 
  }, [dispatch]);
  return (
    <>
        <div dir={i18n.language === 'ar'? document.body.dir = "rtl":document.body.dir = "rtl"}>
        <Swiper 
      
      breakpoints={{
       200: {
         slidesPerView: 1,
         spaceBetween: 10
       },
       500: {
         slidesPerView: 2,
         spaceBetween: 10
       },
       640: {
         slidesPerView: 3,
         spaceBetween: 10
       },
       984: {
         slidesPerView: 4,
         spaceBetween: 10
       }
     }}
       loop={true}
       slidesPerView={3}
       spaceBetween={30}
       navigation={{
           nextEl: '.swiper-button-next', // Specify the element for the next button
           prevEl: '.swiper-button-prev', // Specify the element for the previous button
         }}
       pagination={{
           clickable: true,
         }}
       //   autoplay={{
       //     delay: 1000,
   
       //     disableOnInteraction: false,
       //   }}
          modules={[Pagination, Autoplay,Navigation]}

      className="mySwiper bg-black">
     
  {LastEightItems?.map((Producet)=>(
     <SwiperSlide>
     <section key={Producet._id} class="text-white body-font">
      <div class="container px-5 py-12 mx-auto">
       <div class="flex flex-wrap -m-4 bg-black rounded-md">
        <div class="lg:w-full	md:w-full  p-4 w-full border-solid	 border rounded-xl border-b-blue-500 border-l-blue-500 border-r-purple-500 border-t-purple-500 bg-148 ">
          <Link to={`/Produect/${Producet._id}`} class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-contain max-sm:object-contain object-center w-full h-full block" src={img1}/>
          </Link>
          {/* src={Producet.imageCover} */}
         <div  dir={i18n.language === 'ar'? document.body.dir = "rtl":document.body.dir = "ltr"} class="mt-4">
            <h3 class="text-white text-xs tracking-widest title-font mb-1">
            {(() => {
  const category = categories?.data?.find(
    (category) => category?._id === Producet?.category
 );
  return category ? category?.name : "Category Not Found";
})()}
            </h3>
            <h2 class="mb-2 title-font text-lg text-white font-medium">{i18n.language === 'ar'? Producet.titleAr:Producet.title}</h2>
            <div className="flex justify-between items-center ">
            <p className="mt-1 text-white ">{Producet.price} EGY</p>
            <button
            onClick={() => {
           {userToken?   dispatch(PostCart(Producet._id)).then(() => {
             dispatch(getCart());
            }):toast.error("Please Login First!")}
       }}
   
            className={`${i18n.language === 'ar'? "text-sm":"text-lg"} inline-flex hover:scale-105 rounded-custom-dansha text-white bg-gradient-to-r from-blue-500 to-purple-500 border-0 py-2 px-3 focus:outline-none   hover:bg-black hover:from-gray-600 transition-all`}>{t("Add to Cart")}</button>
            </div>
         </div>
        </div>
       </div>
      </div>
    </section>
     </SwiperSlide>
  ))}

       <div className="swiper-button-prev" />
   <div className="swiper-button-next" />
     </Swiper>
        </div>
    
    </>
  );
}
export default SwiperproductsLastRecent