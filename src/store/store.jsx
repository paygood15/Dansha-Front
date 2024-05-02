import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import CategorySlice from "./CategorySlice";
import ProductsSlice from "./ProductsSlice";
import ContactSlice from "./ContactSlice";
import CartSlice from "./CartSlice";
import UserSlice from "./UserSlice";
import UserAdminSlice from "./UserAdminSlice";
import OrederSlice from "./OrederSlice";
import AddressesSlice from "./AddressesSlice";
import CreateOrder from "./CreateOrder";
const store = configureStore({
  reducer: {
     authSlice,
     CategorySlice,
     ProductsSlice,
     ContactSlice,
     CartSlice,
     UserSlice,
     UserAdminSlice,
     OrederSlice,
     AddressesSlice,
     CreateOrder
    }
});
// posts, auth
export default store;
