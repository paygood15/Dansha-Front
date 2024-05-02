import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../store/CategorySlice";
import { addProduct,deleteProducts,getAllProducts} from "../../store/ProductsSlice";
import { Link,useNavigate } from "react-router-dom";
import Pagination from "../../utils/pagenation"
import Loading from "../../utils/Loading";
import i18n from 'i18next';
import { getUser } from "../../store/UserSlice";
const Admin = () => {
  const userToken = localStorage.getItem("userToken")
const userRole = localStorage.getItem("userRole")

    const [title, setTitle] = useState("");
    const [titleAr, setTitleAr] = useState("");
    const [category, SetCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [productDescription, SetProductDescription] = useState("");
    const [productDescriptionAr, SetProductDescriptionAr] = useState("");
    const [imageFile, setImageFile] = useState(null);

    console.log(category);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.CategorySlice);
    const { products, loading, error } = useSelector((state) => state.ProductsSlice);

   
  
    const page = 0;
    const press = (page) => {
      dispatch(getAllProducts(page));
    };
    const categoriesData = categories?.data;
    const allProductsData = products?.data;
    console.log(allProductsData);
    useEffect(() => {
      dispatch(getUser());
        dispatch(getAllCategories());
        dispatch(getAllProducts());
      
      }, [dispatch]);

      const { User} = useSelector((state) => state.UserSlice);
      console.log(User?.data?.role)
      const Role = User?.data?.role
      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(); console.log(User?.data?.role);
        formData.append('title', title);
        formData.append('titleAr', titleAr);
        formData.append('category', category);
        formData.append('quantity', quantity);
        formData.append('description', productDescription);
        formData.append('descriptionAr', productDescriptionAr);
        formData.append('imageCover', imageFile);
        formData.append('price', price);
    
        console.log(formData); // Move it here
    
        dispatch(addProduct(formData));
    };

    {
      i18n.language === 'ar' ? document.body.dir = 'ltr' : document.body.dir = 'ltr';
    }
    if (!userToken || userRole !== "admin") {
      return    window.location.href = "/";
    }
      
  return (
   <>
    {userToken ? (
      userRole === "admin" ?  <body className="bg-gray-800 ">
     {loading? <Loading/>: <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-3 m-3">
     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
             <tr>
             <th scope="col" className="px-6 py-3">
                  ID
                </th>
                 <th scope="col" className="px-6 py-3">
                     Product name
                 </th>
                 <th scope="col" className="px-6 py-3">
                     Product name Arabic
                 </th>
                 <th scope="col" className="px-6 py-3">
                     Product description 
                 </th>
                     <th scope="col" className="px-6 py-3">
                     Product description Arabic
                 </th>
                 <th scope="col" className="px-6 py-3">
                 quantity
                 </th>
                 <th scope="col" className="px-6 py-3">
                     Category
                 </th>
                 <th scope="col" className="px-6 py-3">
                     Price
                 </th>
                 <th scope="col" className="px-6 py-3">
                     <span className="sr-only">Edit</span>
                 </th>
             </tr>
         </thead>
         <tbody>
         {allProductsData?.map((product, index) => (
              <tr  key={index+1} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <td>{index + 1}</td>
                  </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <td>{product.title}</td>
              </th>
              <td className="px-6 py-4">
              {product.titleAr}
                  
              </td>
                <td className="px-6 py-4">
              {product.description}
                  
              </td>
                <td className="px-6 py-4">
                {product.descriptionAr}
                    
                </td>
              <td className="px-6 py-4">
              {product.quantity}
                  
              </td>
              <td className="px-6 py-4">
              {(() => {
                         const category = categoriesData?.find(
                           (category) => category._id === product.category
                         );
                         return category ? category.name : "Category Not Found";
                       })()}
              </td>
              <td className="px-6 py-4">
              {product.price} EGY
              </td>
              <td className="px-6 py-4 flex justify-center gap-4 ">
                  <Link to={`/Admin/EditProducts/${product._id}`} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                  <button    onClick={() => {
                           dispatch(deleteProducts(product._id)).then(() => {
                             dispatch(getAllProducts());
                             dispatch(getAllCategories());
                           });
                         }} className=" font-medium text-red-600 dark:text-red-600 hover:underline">Del</button>
              </td>
          </tr>
        ))}
            
       
          
          
         </tbody>
     </table>
 </div>}
      {/* Start Add Produect */}
 
      {allProductsData?.paginationResult?.numberOfPages <= 1 ? (
            ""
          ) : (
            <Pagination
              numberOfPages={products?.paginationResult?.numberOfPages}
              currentPage={page}
              onPageChange={press}
            />
          )}
      <form onSubmit={handleSubmit} className="max-w-md bg-gray-800 mx-auto p-3">
   <div className="relative z-0 w-full mb-5 group">
       <input
        type="text"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required />
       <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
   </div>
   <div className="relative z-0 w-full mb-5 group">
       <input
        type="text"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        value={titleAr}
        onChange={(e) => setTitleAr(e.target.value)}
        required />
       <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name Arabic</label>
   </div>
   <div className="relative z-0 w-full mb-5 group">
       <select
        type="text" 
     
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
           placeholder=" " 
           required
           value={category}
           onChange={(e) => SetCategory(e.target.value)}
            >
             <option value="">Select a category</option>
                 {categoriesData?.map((cat) => (
                   <option key={index + 1} value={cat._id}>{cat.name}</option>
                 ))}
                  </select>
       <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
   </div>
   <div className="relative z-0 w-full mb-5 group">
       <input 
        type="number"
         
         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
           required />
       <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
   </div>
   <div className="grid md:grid-cols-2 md:gap-6">
     <div className="relative z-0 w-full mb-5 group">
         <input
            type="number"
        
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " 
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)} />
         <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
     </div>
     <div className="relative z-0 w-full mb-5 group">
         <textarea
          type="text" 
 
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
          placeholder=" " 
          required
          value={productDescription}
          onChange={(e) => SetProductDescription(e.target.value)}
          
           />
         <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Description</label>
     </div>
   </div>
   <div className="grid md:grid-cols-2 md:gap-6">
     <div className="relative z-0 w-full mb-5 group">
         <input 
       type="file"
       
       onChange={(e) => setImageFile(e.target.files[0])} 
           className="cursor-pointer block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
           placeholder=" " 
           required
           />
         <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Img</label>
     </div>
     <div className="relative z-0 w-full mb-5 group">
         <textarea
          type="text" 
 
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
          placeholder=" " 
          required
          value={productDescriptionAr}
          onChange={(e) => SetProductDescriptionAr(e.target.value)}
          
           />
         <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Description Arabic</label>
     </div>
   </div>
   <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
 </form>
   </body>
 
 
 
      
 
 :navigate("/")
    ) : (navigate("/"))}

   </>
  )
}

export default Admin