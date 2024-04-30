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

<div class="container my-12 py-12 mx-auto px-4 md:px-6 lg:px-12">

  <section class="mb-20 text-gray-800">

    <div class="block rounded-lg shadow-lg bg-white">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full mb-0">
                <thead class="border-b bg-gray-50 rounded-t-lg text-left">
                  <tr>
                    <th scope="col" class="rounded-tl-lg text-sm font-medium px-6 py-4">NAME</th>
                    <th scope="col" class="text-sm font-medium px-6 py-4">TITLE</th>
                    <th scope="col" class="text-sm font-medium px-6 py-4">STATUS</th>
                    <th scope="col" class="text-sm font-medium px-6 py-4">ROLE</th>
                    <th scope="col" class="rounded-tr-lg text-sm font-medium px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <th scope="row" class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <div class="flex flex-row items-center">
                       
                        <div class="ml-4">
                          <p class="mb-0.5 font-medium">Jane Cooper</p>
                          <p class="mb-0.5 text-gray-500">jane.cooper@example.com</p>
                          <p class="mb-0.5 text-gray-500">jane.cooper@example.com</p>
                        </div>
                      </div>
                    </th>
                    <td class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <div class="flex flex-col">
                        <p class="mb-0.5">Regional Paradigm Technican</p>
                        <p class="mb-0.5 text-gray-500">Optimization</p>
                        <p class="mb-0.5 text-gray-500">Optimization</p>
                      </div>
                    </td>
                    <td class="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <span class="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">Active</span>
                    </td>
                    <td class="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">Admin</td>
                    <td class="align-middle  text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <a href="#!" class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out">Edit</a>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <th scope="row" class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <div class="flex flex-row items-center">
                        <img
                          class="rounded-full w-12"
                          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                          alt="Avatar"
                        />
                        <div class="ml-4">
                          <p class="mb-0.5 font-medium">Cody Fisher</p>
                          <p class="mb-0.5 text-gray-500">cody.fisher@example.com</p>
                        </div>
                      </div>
                    </th>
                    <td class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <div class="flex flex-col">
                        <p class="mb-0.5">Product Directives Officer</p>
                        <p class="mb-0.5 text-gray-500">Intranet</p>
                      </div>
                    </td>
                    <td class="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <span class="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-yellow-200 text-yellow-600 rounded-full">Pending</span>
                    </td>
                    <td class="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">Owner</td>
                    <td class="align-middle  text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <a href="#!" class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out">Edit</a>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <th scope="row" class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <div class="flex flex-row items-center">
                        <img
                          class="rounded-full w-12"
                          src="https://mdbootstrap.com/img/new/avatars/11.jpg"
                          alt="Avatar"
                        />
                        <div class="ml-4">
                          <p class="mb-0.5 font-medium">Esther Howard</p>
                          <p class="mb-0.5 text-gray-500">esther.howard@example.com</p>
                        </div>
                      </div>
                    </th>
                    <td class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <div class="flex flex-col">
                        <p class="mb-0.5">Forward Response Developer</p>
                        <p class="mb-0.5 text-gray-500">Directives</p>
                      </div>
                    </td>
                    <td class="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <span class="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">Inactive</span>
                    </td>
                    <td class="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">Member</td>
                    <td class="align-middle  text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <a href="#!" class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out">Edit</a>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <th scope="row" class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <div class="flex flex-row items-center">
                        <img
                          class="rounded-full w-12"
                          src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                          alt="Avatar"
                        />
                        <div class="ml-4">
                          <p class="mb-0.5 font-medium">Janny Wilson</p>
                          <p class="mb-0.5 text-gray-500">jenny.wilson@example.com</p>
                        </div>
                      </div>
                    </th>
                    <td class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <div class="flex flex-col">
                        <p class="mb-0.5">Central Security Manager</p>
                        <p class="mb-0.5 text-gray-500">Program</p>
                      </div>
                    </td>
                    <td class="align-middletext-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <span class="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-blue-200 text-blue-600 rounded-full">Meeting</span>
                    </td>
                    <td class="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">Member</td>
                    <td class="align-middle  text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <a href="#!" class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out">Edit</a>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <th scope="row" class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <div class="flex flex-row items-center">
                        <img
                          class="rounded-full w-12"
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                          alt="Avatar"
                        />
                        <div class="ml-4">
                          <p class="mb-0.5 font-medium">Kristin Watson</p>
                          <p class="mb-0.5 text-gray-500">kristin.watson@example.com</p>
                        </div>
                      </div>
                    </th>
                    <td class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <div class="flex flex-col">
                        <p class="mb-0.5">Lead Implementation Liaison</p>
                        <p class="mb-0.5 text-gray-500">Mobility</p>
                      </div>
                    </td>
                    <td class="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <span class="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">Active</span>
                    </td>
                    <td class="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">Admin</td>
                    <td class="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <a href="#!" class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out">Edit</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <div class="flex flex-row items-center">
                        <img
                          class="rounded-full w-12"
                          src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                          alt="Avatar"
                        />
                        <div class="ml-4">
                          <p class="mb-0.5 font-medium">Danny Williamson</p>
                          <p class="mb-0.5 text-gray-500">danny.williamson@example.com</p>
                        </div>
                      </div>
                    </th>
                    <td class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <div class="flex flex-col">
                        <p class="mb-0.5">Internal Applications Engineer</p>
                        <p class="mb-0.5 text-gray-500">Security</p>
                      </div>
                    </td>
                    <td class="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <span class="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-yellow-200 text-yellow-600 rounded-full">Pending</span>
                    </td>
                    <td class="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">Member</td>
                    <td class="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                      <a href="#!" class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out">Edit</a>
                    </td>
                  </tr>
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