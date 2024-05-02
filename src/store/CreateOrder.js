import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    CashOrder: [],
    loading: true,
    error: false,
  };



  export const CreateCashOrder = createAsyncThunk(
    "Orders/CreateCashOrder",
    async ({ id, formData }, thunkAPI) => {
        
      try {
        console.log(formData);
        const token = localStorage.getItem("userToken");
        const response = await axios.post(
          `https://back-dansha1.onrender.com/api/v1/orders/checkout-session/${id}`,
        
          formData,
          {
            headers: {
             
              Authorization: `Bearer ${token}`
            },
          }
        );
        console.log(response.data);
        return response.data;
      } catch (error) {
        if (error.response) {
          return thunkAPI.rejectWithValue(error.response.data);
        } else {
          return thunkAPI.rejectWithValue("Failed to add product");
        }
      }
    }
  );

  export const CreateDeliverdOrder = createAsyncThunk(
    "Orders/CreateDeliverdOrder",
    async ({ id, formData }, thunkAPI) => {
        
      try {
        console.log(formData);
        const token = localStorage.getItem("userToken");
        const response = await axios.post(
          `https://back-dansha1.onrender.com/api/v1/orders/${id}`,
          formData,
          {
            headers: {
             
              Authorization: `Bearer ${token}`
            },
          }
        );
        console.log(response.data);
        return response.data;
      } catch (error) {
        if (error.response) {
          return thunkAPI.rejectWithValue(error.response.data);
        } else {
          return thunkAPI.rejectWithValue("Failed to add product");
        }
      }
    }
  );



  const CreateOrderSlice = createSlice({
    name: "CreateOrderSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(CreateCashOrder.pending, (state) => {
        state.loading = true;
       console.log("يتم التحميل");
      });
      builder.addCase(CreateCashOrder.fulfilled, (state, action) => {
        state.loading = false;
        console.log("تم التحميل ونجح");
        console.log(action.payload);
        state.CashOrder = action.payload
      
      });
      builder.addCase(CreateCashOrder.rejected, (state,action) => {
        state.loading = false;
        state.error = true;
        console.log("تم التحميل فشل");
      });
      builder.addCase(CreateDeliverdOrder.pending, (state) => {
        state.loading = true;
       console.log("يتم التحميل");
      });
      builder.addCase(CreateDeliverdOrder.fulfilled, (state, action) => {
        state.loading = false;
        console.log("تم التحميل ونجح");
        console.log(action.payload);
      });
      builder.addCase(CreateDeliverdOrder.rejected, (state,action) => {
        state.loading = false;
        state.error = true;
        console.log("تم التحميل فشل");
        console.log(action.payload);
      });
   
    
    },
  });



  export default CreateOrderSlice.reducer;