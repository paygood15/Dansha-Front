import React from 'react'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const AboutMe = () => {
  const { t } = useTranslation();

  const navigate = useNavigate()
  {
    i18n.language === 'ar' ? document.body.dir = 'rtl' : document.body.dir = 'ltr';
  }
  return (
    <>


{/* <section class="text-gray-600 body-font">
  <div class="container px-5 py-5 mx-auto">
    <div class="flex flex-col text-center py-5 w-full">
      <h1 class="text-2xl font-bold title-font  bg-gradient-to-r from-blue-500 to-purple-500 text-transparent  gradient-text">Expert Team Members</h1>
    </div>
    <div class="flex flex-wrap -m-4">
    <div class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 max-sm:w-full">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 hover:scale-110 transition-all duration-300 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-blue-500">Alper Kamu</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 max-sm:w-full">
        <div class="h-full flex flex-col items-center text-center">
        <img alt="team" class="flex-shrink-0 hover:scale-110 transition-all duration-300 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-blue-500">Holden Caulfield</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 max-sm:w-full">
        <div class="h-full flex flex-col items-center text-center">
        <img alt="team" class="flex-shrink-0 hover:scale-110 transition-all duration-300 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-blue-500">Atticus Finch</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 max-sm:w-full">
        <div class="h-full flex flex-col items-center text-center">
        <img alt="team" class="flex-shrink-0 hover:scale-110 transition-all duration-300 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-blue-500">Henry Letham</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}


    <section class="text-gray-600 p-4 body-font">
  <div class="container px-5 py-18 mx-auto">
    <div class="text-center mb-8">
      <h1 class="sm:text-3xl text-2xl font-bold title-font bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text mb-4">{t("Reasons to Choose Us")}</h1>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div class=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1  gap-4 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
    <div class="p-4  flex flex-col text-center items-center rounded-3xl bg-gray-100 shadow-2xl hover:scale-105 transition-all duration-300 ">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-blue-500 text-lg title-font font-medium mb-3">{t("Best Services")}</h2>
          <p class="leading-relaxed text-base">{t("Service unequally distributed worldwide with increasing concentration")}</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">{t("Learn More")}
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4  flex flex-col text-center items-center rounded-3xl bg-gray-100 shadow-2xl hover:scale-105 transition-all duration-300 ">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-blue-500 text-lg title-font font-medium mb-3">{t("Experienced")}
</h2>
          <p class="leading-relaxed text-base">{t("Experience unequally distributed worldwide with increasing concentration")}</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">{t("Learn More")}
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4  flex flex-col text-center items-center rounded-3xl bg-gray-100 shadow-2xl hover:scale-105 transition-all duration-300 ">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-blue-500 text-lg title-font font-medium mb-3">{t("Professionals")}</h2>
          <p class="leading-relaxed text-base">{t("Professionals unequally distributed world increasing concentration.")}</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">{t("Learn More")}
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <button 
    onClick={()=> {
      navigate("/Contact")
    }}
    class="flex mx-auto mt-16 transition-all duration-300 hover
    
    :bg-black text-white hover:bg-black hover:from-gray-600 bg-gradient-to-r from-blue-500 to-purple-500  border-0 py-2 px-8 focus:outline-none hover:scale-105 rounded-custom-dansha text-lg">{t("Contact")}</button>
  </div>
</section>
    </>
  )
}

export default AboutMe