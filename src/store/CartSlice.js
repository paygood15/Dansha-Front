import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("userToken");

export const getCart = createAsyncThunk(
    "cart/fetchCartItems",
    async (id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await fetch(`https://back-dansha1.onrender.com/api/v1/cart`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();
    
        console.log(data);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const PostCart = createAsyncThunk(
    "cart/postcart",
    async (_id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const token = localStorage.getItem("userToken");
        console.log("User Token:", token);
        console.log("Product ID to send:", _id);
        const res = await axios.post(
          `https://back-dansha1.onrender.com/api/v1/cart`,
          { productId: _id, color: "red" },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        console.log(productId);
        console.log("from postcart done", res.data);
        return res.data;
      } catch (error) {
        console.log(productId);
  
        console.log("حدث خطأ: ", error);
        return rejectWithValue(error.message);
      }
    }
  );
  export const upDateCountCart = createAsyncThunk(
    "cart/upDateCountCart",
    async ({ id, count }, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const token = localStorage.getItem("userToken");
        console.log("User Token:", token);
        console.log("Product ID to send:", id);
        console.log("Cart data to send:", count);
        const res = await axios.put(
          `https://back-dansha1.onrender.com/api/v1/cart/${id}`,
          
          { count: count},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        
       
        console.log("Update postcart done", res.data);
        return res.data;
      } catch (error) {
        console.log("Error occurred:", error);
        console.log("حدث خطأ: ", error);
        return rejectWithValue(error.message);
      }
    }
  );  
  export const removeItemFromCart = createAsyncThunk(
    "cart/removeItemFromCart",
    async (_id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {

     
        console.log("id axios",_id);

        const res = await axios.delete(
          `https://back-dansha1.onrender.com/api/v1/cart/${_id}`,
         
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}
              `,
            },
          }
        );
    console.log("ahmed goda",res.data);
        return res.data;
      } catch (error) {
        console.log("حدث خطأ: ", error);
        return rejectWithValue(error.message);
      }
    }
  );

  const initialState = {
    carts: [],
    cartitem: [],
    postcart: [],
    ahmed: [],
    loading: false,
    error: null,
  };
  
  const PostSlice = createSlice({
    name: "posts",
    initialState,
   
    extraReducers: (builder) => {
      builder

        // get cart item
        .addCase(getCart.pending, (state, action) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getCart.fulfilled, (state, action) => {
          state.loading = false;
          state.carts = action.payload;
        })
        .addCase(getCart.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })

        .addCase(PostCart.pending, (state, action) => {
          state.loading = true;
          state.error = null;
          console.log("pend");
        })
        .addCase(PostCart.fulfilled, (state, action) => {
          state.loading = false;
          state.postcart = action.payload;
          console.log(action.payload);
          console.log("send");
        })
        .addCase(PostCart.rejected, (state, action) => {
          state.loading = false;
          state.error = true;
          console.log(action.payload);
        });
        builder.addCase(upDateCountCart.pending, (state, action) => {
          state.loading = true;
          console.log("يتم التحميل")
        });
        builder.addCase(upDateCountCart.fulfilled, (state, action) => {
          state.loading = false;
          state.error = false;
          console.log("تم التحميل ونجح")
        });
        builder.addCase(upDateCountCart.rejected, (state, action) => {
          state.loading = false;
          state.error = true;
          console.log("تم التحميل وفشل")
          console.log(action.payload)
        })
    
        .addCase(removeItemFromCart.pending, (state, action) => {
          state.loading = true;
          state.error = null;
          console.log("pend");
        })
        .addCase(removeItemFromCart.fulfilled, (state, action) => {
          state.loading = false;
          console.log("del done");
       
        })
        .addCase(removeItemFromCart.rejected, (state, action) => {
          state.loading = false;
          state.error = true;
         
        });
    }
  });
  
  
  export default PostSlice.reducer;
  