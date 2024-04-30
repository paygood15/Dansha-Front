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
     AddressesSlice
    }
});
// posts, auth
export default store;
