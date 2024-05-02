import React from 'react'
import img1 from "../assets/kalat-removebg-preview.png"
import Pagination from "../utils/pagenation"
// import SwiperproductsLastRecent from '../swiper/Swiper-productsLastRecent';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getAllProducts} from "../store/ProductsSlice"
import {getAllCategories} from "../store/CategorySlice"
import { Link ,useNavigate} from 'react-router-dom';
import { PostCart ,getCart} from "../store/CartSlice";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useTranslation  } from 'react-i18next';
import LoadingTwo from '../utils/LoadingTwo';
import i18n from 'i18next'
const Shop = () => {
  const { t } = useTranslation();
  const userToken = localStorage.getItem("userToken")
  const userName = localStorage.getItem("userName")
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { products,loading } = useSelector((state) => state.ProductsSlice);
  const { categories } = useSelector((state) => state.CategorySlice);
  const page = 0;
  console.log(categories)
console.log(products)
const press = (page) => {
  dispatch(getAllProducts(page));
};
// {(() => {
//   const category = categories?.data?.find(
//     (category) => category?._id === Producet?.data?.category
//   );
//   return category ? category?.name : "Category Not Found";
// })()}
{
  i18n.language === 'ar' ? document.body.dir = 'rtl' : document.body.dir = 'ltr';
}

useEffect(() => {
     dispatch(getAllProducts());
     dispatch(getAllCategories());    
}, [dispatch]);
  return (
  <>
   {/* start head text ecommerc */}
   <section className= "body-font">
  <div className="py-5 px-3">
    <div className="lg:w-full   pr-2 pl-2 flex-col sm:flex-row sm:items-center  flex items-center mx-auto">
      <h1 className="flex-grow text-3xl	font-bold sm:pr-16  title-font bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text">{t("Products Dansha Store")}</h1>
      <button onClick={()=> {
       {userToken?  toast.success(`Welcome ${userName} to Dansha `):navigate("/Register")}
      }}
       className="flex-shrink-0 text-gray-500 rounded-custom-dansha border border-gray-400 py-2 px-8 focus:outline-none hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white hover:border-transparent  text-lg mt-10 sm:mt-0  transition-all">{userToken? `welcome ${userName} `:"Register Now"}</button>
    </div>
  </div>
</section>
{/* end head text ecommerc */}
   <section className="text-white py-5 body-font">
  <div className="container px-11 py-3 mx-auto">
  {loading? <LoadingTwo/>:  <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  max-sm:grid-cols-1 gap-3  -m-4">

{products?.data?.map((Producet,index)=> (
  <div key={index + 1} className=" p-4 w-full rounded shadow-md">
  <Link to={`/Produect/${Producet._id}`} className="block relative h-48 rounded overflow-hidden">
    <img alt="ecommerce" className="object-contain  object-center w-full h-full block"  src={img1}/>
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
    <h2 className="text-gray-900 title-font text-lg font-medium">
    {i18n.language === 'ar'? Producet.titleAr:Producet.title}
      </h2>
    <div className="flex justify-between items-center py-4">
         <p className="mt-1 text-black ">{Producet.price} EGY</p>
         <button 
         onClick={() => {
         {userToken?  dispatch(PostCart(Producet._id)).then(() => {
          dispatch(getCart());
         }): toast.error("Please Login First!"  ) }
    }}
         className={` ${i18n.language === 'ar'? "text-sm":"text-lg"} inline-flex hover:scale-105 rounded-custom-dansha text-white bg-gradient-to-r from-blue-500 to-purple-500 border-0 py-2 px-3 focus:outline-none  text-lg  hover:bg-black hover:from-gray-600 transition-all`}>{t("Add to Cart")}</button>
         </div>
  </div>
</div>
))}

   
 
  </div>}
  </div>
</section>

{/* pagenate */}


{products?.paginationResult?.numberOfPages <= 1 ? (
            ""
          ) : (
            <Pagination
              numberOfPages={products?.paginationResult?.numberOfPages}
              currentPage={page}
              onPageChange={press}
            />
          )}

{/* <nav className="text-center pt-8 pb-4">
  <ul className="inline-flex -space-x-px text-base h-10">
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav> */}

{/* pagenate */}
   {/* end ecommerc */ }
   {/* <section className= "body-font">
  <div className="px-1 pt-4 bg-black">
    <div className="lg:w-full   pr-2 pl-2  flex-col sm:flex-row sm:items-center  flex items-center mx-auto">
      <h1 className="flex-grow text-3xl	 sm:pr-16  font-bold title-font bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text">{t("Our Latest Products")}</h1>
      <button onClick={()=>{
        navigate("/Shop")
      }} className="flex-shrink-0 text-gray-500 rounded-custom-dansha border border-gray-400 py-2 px-8 focus:outline-none hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white hover:border-transparent  text-lg mt-10 sm:mt-0  transition-all">{t("Show products")}</button>
    </div>
  </div>
</section> */}

   {/* <SwiperproductsLastRecent className="py bg-gray-300" /> */}
   <div className='w-full h-1  bg-gradient-to-r from-blue-500 to-purple-500'></div>
   </>
  )
}

export default Shop