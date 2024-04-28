import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import CategorySlice from "./CategorySlice";
import ProductsSlice from "./ProductsSlice";
import ContactSlice from "./ContactSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
     authSlice,
     CategorySlice,
     ProductsSlice,
     ContactSlice,
     CartSlice
    }
});
// posts, auth
export default store;
