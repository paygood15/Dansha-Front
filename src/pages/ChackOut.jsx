import React, {   useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {CreateAdresses} from "../store/AddressesSlice"
import { CreateDeliverdOrder,CreateCashOrder} from "../store/CreateOrder"
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate} from 'react-router-dom';
import { getCart } from '../store/CartSlice';

const ChackOut = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [alias, setalias] = useState("");
  const [details, setdetails] = useState("");
  const [phone, setphone] = useState("");
  const [city, setcity] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const { t } = useTranslation();
  const { carts } = useSelector((state) => state.CartSlice);

  const id = carts?.data?._id
  useEffect(() => {
    dispatch(getCart());  
}, [dispatch]);

const handleSubmitCash = async (e) => {
  e.preventDefault();
  if (!alias || !phone || !city || !postalCode || !details) {
    toast.error("Please fill in all required fields.");
    return;
  }

  try {
    // Create the cash order
    const cashOrderResponse = await dispatch(CreateCashOrder({id,
         alias,
         details,
         phone,
         city,
         postalCode,building: "8028"}));
    
    // Check if CashOrder.link is available after creating the order
    const cashOrderLink = cashOrderResponse.payload?.link;

    if (cashOrderLink) {

      // Redirect the user to the cash order link
      window.location.href = cashOrderLink;
    } else {
      console.log("CashOrder link is not available.");
      toast.error("An error occurred while processing your request. Please try again later.");
    }
  } catch (error) {
    console.error("An error occurred during dispatch:", error);
    toast.error("An error occurred. Please try again later.");
  }
};
const handleSubmitDelivery = (e) => {
  e.preventDefault();
  if (!alias || !phone || !city || !postalCode || !details) {
    toast.error("Please fill in all required fields.");
    return;
  }
  dispatch(CreateDeliverdOrder({id,alias,details,phone,city,postalCode}));
  toast.success(`تم العمليه بنجاح سوف يتم التواصل معك في اقرب وقت`)
  
};

{
  i18n.language === 'ar' ? document.body.dir = 'rtl' : document.body.dir = 'ltr';
}
  return (
    <>
   
    <div className="relative mx-auto w-full bg-white">
  <div className="grid min-h-screen grid-cols-1">
    <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">Secure Checkout<span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span></h1>
       
       
        <form  className="mt-10 flex flex-col space-y-4">
          <div>
            <label  className="text-xs font-semibold text-gray-500">Name</label>
            <input
               type="text"
               placeholder="Name"
               required
               value={alias}
               onChange={(e) => setalias(e.target.value)}
               className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" />
            </div>
          <div className="relative">
            <label  className="text-xs font-semibold text-gray-500">Phone </label>
            <input 
            type="text"  
            required
            placeholder="Phone"
            value={phone}
            onChange={(e) => setphone(e.target.value)} 
            className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" />
            {/* <img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" className="absolute bottom-3 right-3 max-h-4" /> */}
            </div>
                
            <div>
            <label   className="text-xs font-semibold text-gray-500">City</label>
            <input 
            type="text"  
            required
            placeholder="City" 
            value={city}
            onChange={(e) => setcity(e.target.value)} 
            className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
            <label   className="text-xs font-semibold text-gray-500">PostalCode</label>
            <input 
            type="text"  
            required
            placeholder="PostalCode" 
            value={postalCode}
            onChange={(e) => setpostalCode(e.target.value)} 
            className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
            <label  className="text-xs font-semibold text-gray-500">details</label>
            <input 
            type="text"  
            required
            placeholder="details" 
            value={details}
            onChange={(e) => setdetails(e.target.value)}
            className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" />
            </div>
            <p className="mt-10 text-center text-sm font-semibold text-gray-500">By placing this order you agree to the <a href="#" className="whitespace-nowrap text-teal-400 underline hover:text-teal-600">Terms and Conditions</a></p>

            <button  onClick={handleSubmitCash}type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">{t("Place Order Cash")}</button>
        <button onClick={handleSubmitDelivery}
        type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">{t("Place Order Delevry")}</button>
        </form>
        <p className="mt-10 text-center text-sm font-semibold text-gray-500">By placing this order you agree to the <a href="#" className="whitespace-nowrap text-teal-400 underline hover:text-teal-600">Terms and Conditions</a></p>

      </div>
    </div>
    {/* <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
      <h2 className="sr-only">Order summary</h2>
      <div>
        <img src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
      </div>
      <div className="relative">
        <ul className="space-y-5">
          <li className="flex justify-between">
            <div className="inline-flex">
              <img src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="max-h-16" />
              <div className="ml-3">
                <p className="text-base font-semibold text-white">Nano Titanium Hair Dryer</p>
                <p className="text-sm font-medium text-white text-opacity-80">Pdf, doc Kindle</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-white">$260.00</p>
          </li>
          <li className="flex justify-between">
            <div className="inline-flex">
              <img src="https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="max-h-16" />
              <div className="ml-3">
                <p className="text-base font-semibold text-white">Luisia H35</p>
                <p className="text-sm font-medium text-white text-opacity-80">Hair Dryer</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-white">$350.00</p>
          </li>
        </ul>
        <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
        <div className="space-y-2">
          <p className="flex justify-between text-lg font-bold text-white"><span>Total price:</span><span>$510.00</span></p>
          <p className="flex justify-between text-sm font-medium text-white"><span>Vat: 10%</span><span>$55.00</span></p>
        </div>
      </div>
      <div className="relative mt-10 text-white">
        <h3 className="mb-5 text-lg font-bold">Support</h3>
        <p className="text-sm font-semibold">+01 653 235 211 <span className="font-light">(International)</span></p>
        <p className="mt-1 text-sm font-semibold">support@nanohair.com <span className="font-light">(Email)</span></p>
        <p className="mt-2 text-xs font-medium">Call us now for payment related issues</p>
      </div>
      <div className="relative mt-10 flex">
        <p className="flex flex-col"><span className="text-sm font-bold text-white">Money Back Guarantee</span><span className="text-xs font-medium text-white">within 30 days of purchase</span></p>
      </div>
    </div> */}
  </div>
</div></>
  )
}

export default ChackOut