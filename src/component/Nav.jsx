import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const Nav = (open) => {
  const { t } = useTranslation();
  return (
    <ul
      className={`*:transition-all mr-10 nav overflow-hidden flex gap-4 text-lg     
            w-full sm:relative absolute sm:left-auto
          left-0 sm:top-0 max-sm:border-b-2  max-sm:border-blue-500 max-sm:border-solid  ${open?.open ? " bottom-[-283%] bg-white rounded-lg" : " bottom-52"} 
             transition-all duration-500 ease-in-out sm:min-h-fit min-h-56
           sm:p-0  py-6 sm:flex-row flex-col justify-center ps-2 z-50`}
    >
      <li
        className="nav-item relative sm:after:absolute after:content-['']
             after:h-0.5  after:right-0 after:bottom-0 
             after:transition after:duration-300 after:w-full after:scale-x-0 after:origin-bottom-right after:bg-blue-500
              hover:bg-transparent  hover:after:origin-bottom-left hover:after:scale-x-100  "
      >
        <NavLink className="nav-link bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text" to={"/"}>
         {t("Home")}
        </NavLink>
      </li>
      <li
        className="nav-item relative  sm:after:absolute after:content-[''] 
             after:h-0.5  after:right-0 after:bottom-0 
             after:transition after:duration-300 after:w-full after:scale-x-0 after:origin-bottom-right after:bg-blue-500
              hover:bgColor hover:after:origin-bottom-left hover:after:scale-x-100  "
      >
        <NavLink className="nav-link bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text" to={"/shop"}>
         {t("Shop")}
        </NavLink>
      </li>
      <li
        className="nav-item relative  sm:after:absolute after:content-[''] 
             after:h-0.5  after:right-0 after:bottom-0 
             after:transition after:duration-300 after:w-full after:scale-x-0 after:origin-bottom-right after:bg-blue-500
              hover:bgColor hover:after:origin-bottom-left hover:after:scale-x-100  "
      >
        <NavLink className="nav-link bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text" to={"/AboutMe"}>
        
          {t("About Us")}
        </NavLink>
      </li>
      <li
        className="nav-item relative sm:after:absolute after:content-['']
             after:h-0.5  after:right-0 after:bottom-0 
             after:transition after:duration-300  after:w-full after:scale-x-0 after:origin-bottom-right after:bg-blue-500
              hover:bgColor  hover:after:origin-bottom-left hover:after:scale-x-100  "
      >
        <NavLink className="nav-link bg-gradient-to-r from-blue-500 to-purple-500 text-transparent gradient-text" to={"/Contact"}>
      
         {t("Contact")}
        </NavLink>
      </li>
     
    </ul>
  );
};

export default Nav;
