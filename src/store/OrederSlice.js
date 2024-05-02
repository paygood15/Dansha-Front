import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    Orders: [],
    loading: true,
    error: false,
  };

  export const getAllOrders = createAsyncThunk(
    "Orders/getAllOrders",
    async (page) => {
      const token = localStorage.getItem("userToken");
      try {
        const response = await axios.get(
          `https://back-dansha1.onrender.com/api/v1/orders?limit=100&page=${page}`,
          {
            // params: {
            //   limit: 50,
            //   page: page
            // },
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        return response.data;
      } catch (error) {
        // يمكنك التعامل مع الأخطاء هنا
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  );



  const OrderSlice = createSlice({
    name: "OrderSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getAllOrders.pending, (state) => {
        state.loading = true;
       
      });
      builder.addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.Orders = action.payload;
      });
      builder.addCase(getAllOrders.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });

    
    },
  });

  export default OrderSlice.reducer;