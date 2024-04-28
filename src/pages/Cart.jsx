import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getCart,upDateCountCart} from "../store/CartSlice";
import i18n from 'i18next';
const Cart = () => {
    const dispatch = useDispatch();
    const { carts } = useSelector((state) => state.CartSlice);
  console.log(carts)
  const totalCartPrice = carts?.data?.totalCartPrice
  const numOfCartItems = carts?.numOfCartItems



  useEffect(() => {
       dispatch(getCart());  
  }, [dispatch]);




  return (
    <>
   
        <section
        class=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
            <div class="grid grid-cols-12">
                <div
                    class="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                    <div class="flex items-center justify-between pb-8 border-b border-gray-300">
                        <h2 class="font-manrope font-bold text-3xl leading-10 text-black">Shopping Cart</h2>
                        <h2 class="font-manrope font-bold text-xl leading-8 text-gray-600">3 Items</h2>
                    </div>
                    <div class="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                        <div class="col-span-12 md:col-span-7">
                            <p class="font-normal text-lg leading-8 text-gray-400">Product Details</p>
                        </div>
                        <div class="col-span-12 md:col-span-5">
                            <div class="grid grid-cols-5">
                                <div class="col-span-3">
                                    <p class="font-normal text-lg leading-8 text-gray-400 text-center">Quantity</p>
                                </div>
                                
                                <div class="col-span-2">
                                    <p class="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                                </div>
                            </div>
                        </div>
                    </div>

                 {carts?.data?.products?.map((CartOne)=>(
                            <div
                            class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                            <div class="w-full md:max-w-[126px]">
                                <img src={`https://back-dansha1.onrender.com/` + CartOne?.product?.imageCover} alt="perfume bottle image"
                                    class="mx-auto"/>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                                <div class="md:col-span-2">
                                    <div class="flex flex-col max-[500px]:items-center gap-3">
                                        <h6 class="font-semibold text-base leading-7 text-black">{CartOne.product ? (i18n.language === 'ar' ? CartOne.product.titleAr : CartOne.product.title) : 'Title Not Available'}</h6>
                                        <h6 class="font-normal text-base leading-7 text-gray-500">{CartOne.product && CartOne.product.category && CartOne.product.category.name !== null ? CartOne.product.category.name : 'No Category'}</h6>
                                        <h6 class="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">{CartOne.price} EGY</h6>
                                    </div>
                                </div>
                                <div class="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                                    <div class="flex items-center h-full">
                                        <button 
                                        onClick={() => {
                                            const productId = CartOne._id; 
                                            const currentCount = parseInt(CartOne.count);      
                                            const newCount = currentCount - 1; 
                                            dispatch(upDateCountCart({ id: productId, count: newCount })) 
                                                .then(() => {
                                                    console.log("Product ID:", productId);
                                                    console.log("New Count:", newCount);
                                                    dispatch(getCart());
                                                })
                                                .catch((error) => {
                                                    console.error("Failed to update cart item count:", error);
                                                });
                                        }}
                                            class="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                viewBox="0 0 22 22" fill="none">
                                                <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                            </svg>
                                        </button>
                                        <input type="text"
                                            class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                                            placeholder={CartOne.count}/>
                                        <button   
                                                onClick={() => {
                                            const productId = CartOne._id; 
                                            const currentCount = parseInt(CartOne.count);      
                                            const newCount = currentCount + 1; 
                                            dispatch(upDateCountCart({ id: productId, count: newCount })) 
                                                .then(() => {
                                                    console.log("Product ID:", productId);
                                                    console.log("New Count:", newCount);
                                                    dispatch(getCart());
                                                })
                                                .catch((error) => {
                                                    console.error("Failed to update cart item count:", error);
                                                });
                                        }}
                                            class="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                viewBox="0 0 22 22" fill="none">
                                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                    stroke-width="1.6" stroke-linecap="round" />
                                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                    stroke-width="1.6" stroke-linecap="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                    <p class="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">{CartOne.count * CartOne.price} EGY</p>
                                </div>
                            </div>
                        </div>
                 ))}
                   

                </div>
                <div
                    class=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
                    <h2 class="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                        Order Summary</h2>
                    <div class="mt-8">
                        <div class="flex items-center justify-between pb-6">
                            <p class="font-normal text-lg leading-8 text-black">{numOfCartItems} Items</p>
                            <p class="font-medium text-lg leading-8 text-black">{totalCartPrice} EGY</p>
                        </div>
                    
                        <form>
                           
                        
                            <div class="flex items-center justify-between py-8">
                                <p class="font-medium text-xl leading-8 text-black">Total</p>
                                <p class="font-semibold text-xl leading-8 text-indigo-600">{totalCartPrice} EGY</p>
                            </div>
                            <button
                                class="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">Checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>





                                            </>
  )
}

export default Cart