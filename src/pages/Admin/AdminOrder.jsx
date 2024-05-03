import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllOrders } from "../../store/OrederSlice";
import i18n from 'i18next';
const AdminOrder = () => {
    const { Orders,loading } = useSelector((state) => state.OrederSlice);
    const userToken = localStorage.getItem("userToken")
    const userRole = localStorage.getItem("userRole")
    const dispatch = useDispatch();
  console.log(Orders);
    useEffect(() => {
      dispatch(getAllOrders());
    }, [dispatch]);
    {
      i18n.language === 'ar' ? document.body.dir = 'ltr' : document.body.dir = 'ltr';
    }
    if (!userToken || userRole !== "admin") {
        return    window.location.href = "/";
      }
  return (
   <>

<div className="container my-12 py-12 mx-auto px-4 md:px-6 lg:px-12">

  <section className="mb-20 text-gray-800">

    <div className="block rounded-lg shadow-lg bg-white">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full mb-0">
                <thead className="border-b bg-gray-50 rounded-t-lg text-left">
                  <tr>
                    <th scope="col" className="rounded-tl-lg text-sm font-medium px-6 py-4">NAME</th>
                    {/* <th scope="col" className="text-sm font-medium px-6 py-4">shippingAddress</th> */}
                    <th scope="col" className="text-sm font-medium px-6 py-4">Product</th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">count</th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">price</th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">totalOrderPrice</th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">createdAt</th>
                  </tr>
                </thead>
                <tbody>
                 {Orders?.data?.map((order,index)=> (
                   <tr className="border-b" key={index + 1}>
                   <th scope="row" className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                     <div className="flex flex-row items-center">
                      
                       <div className="ml-4">
                         <p className="mb-0.5 font-medium">{order.user.name}</p>
                         <p className="mb-0.5 text-gray-500">{order.user.email}</p>
                         <p className="mb-0.5 text-gray-500">{order.user.phone}</p>
                       </div>
                     </div>
                   </th>


                   {/* <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                     <div className="flex flex-col">
                        <p className="mb-0.5">{order.shippingAddress.details}</p> 
                        <p className="mb-0.5 text-gray-500">{order.shippingAddress.phone}</p> 
                        <p className="mb-0.5 text-gray-500">{order.shippingAddress.city}</p> 
                        <p className="mb-0.5 text-gray-500">{order.shippingAddress.postalCode}</p> 
                     </div>
                   </td> */}


                   <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                    {order.cartItems.map((one,index)=> (
                <p key={index + 1} className="mb-0.5 text-gray-500">{one.product.title}</p>

                    ))}
                     {/* <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">Active</span> */}
                   </td>
                   <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                    {order.cartItems.map((one,index)=> (
                <p key={index + 1} className="mb-0.5 text-blue-800">{one.count}</p>

                    ))}
                     {/* <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">Active</span> */}
                   </td>
                   <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                    {order.cartItems.map((one,index)=> (
                <p key={index + 1} className="mb-0.5 text-black font-bold">{one.price} EGY</p>

                    ))}
                     {/* <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">Active</span> */}
                   </td>
                   <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                  
                <p  className="mb-0.5 text-black font-bold">{order.totalOrderPrice} EGY</p>

                  
                     {/* <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">Active</span> */}
                   </td>
                   <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                  
                  <p  className="mb-0.5 text-gray-500">{order.createdAt}</p>
  
                    
                       {/* <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">Active</span> */}
                     </td>
                  
                 </tr>
                 ))}   
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>


</div>

   </>
  )
}

export default AdminOrder
