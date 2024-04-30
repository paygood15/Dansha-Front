import React from 'react'
import { useState } from "react"
import { useDispatch } from "react-redux";
import { AddEmail } from "../store/ContactSlice"
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
const Contact = () => {
  const { t } = useTranslation();
  const [name,setname] = useState()
  const [email,seteemail] = useState()
  const [message,setmessage] = useState()

  const dispatch = useDispatch();

   const submitForm = (event) => {
     event.preventDefault();
     const formData = {
      name,
      email,
      message,
     }; 
console.log(formData);
   dispatch(AddEmail(formData))
       .unwrap()
       .then((response) => {
           if (response.error) {
               alert("Please check your internet connection.");
           } else {
             setname("");
             seteemail("");
             setmessage("");
                
             alert("Data has been sent successfully.");
             
           }
       })
       .catch((error) => {
           alert("An error occurred while sending data: " + (error.message || "Unknown error"));
       });
};
// useEffect(() => {
//   {i18n.language === 'ar'? document.body.dir = "rtl":document.body.dir = "ltr"}
 
// }, []);
{
  i18n.language === 'ar' ? document.body.dir = 'rtl' : document.body.dir = 'ltr';
}
  return (
  <>
  <div class="flex flex-col text-center pt-5 w-full">
      <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4  bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text">{t("Contact")}</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{t("Do you want to contact us so we can do a great job now? Contact us immediately")}

</p>
    </div>
  <section class="text-gray-600 body-font relative">
  <div class={`${i18n.language === 'ar'? "gap-3":""} container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap`}>
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" ></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Egypt - Cairo - Shorouq City
               - Egypt - Gharbia - Mahala</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text leading-relaxed">example@email.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">+"20 11 5953 2221"</p>
        </div>
      
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class=" text-lg mb-1 font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text title-font">{t("Feedback")}</h2>
      <p class="leading-relaxed mb-5 text-gray-600">{t("Write us a few words about your project or ask us any questions and we will respond to you within 1 business day.")}</p>
      <form onSubmit={submitForm}>

      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">{t("Name")}</label>
        <input
        onChange={(e) => setname(e.target.value)}
        value={name}
        type="text"
        id="name"
        name="name"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">{t("Email")}</label>
        <input
        onChange={(e) => seteemail(e.target.value)} 
        value={email}
        type="email"
        id="email"
        name="email"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">{t("Message")}</label>
        <textarea 
        onChange={(e) => setmessage(e.target.value)}
        value={message}
        id="message"
        name="message"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button  
      type='submit'
      class="text-white bg-gradient-to-r from-blue-500 to-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{t("send")}</button>
         </form>

    </div>
   
  </div>
</section>
  </>
  )
}

export default Contact