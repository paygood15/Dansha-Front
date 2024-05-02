import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (userData, { rejectWithValue }) => {
      try {
        const res = await axios.post(
          "https://back-dansha1.onrender.com/api/v1/auth/signup",
          userData, {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("نجاح: البيانات المستلمة", res.data);
        return res.data;
      } catch (error) {
        // الاستثناءات الخاصة بالشبكة أو الخطأ العام
        console.log("حدث خطأ: ", error);
        return rejectWithValue("حدث خطأ: " + error.message);
      }
    }
  );


  export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userData, { rejectWithValue, getState }) => {
      try {
        const res = await axios.post(
          "https://back-dansha1.onrender.com/api/v1/auth/login",
          userData
        );
        localStorage.setItem("userToken", res.data.token);
        localStorage.setItem("userEmail", res.data.data.email);
        localStorage.setItem("userName", res.data.data.name);
        localStorage.setItem("userPhone", res.data.data.phone);
        localStorage.setItem("userRole", res.data.data.role);
      
        console.log("نجاح: البيانات المستلمة", res.data);
        // const currentState = getState();
  
        return res.data;
      } catch (error) {
        // الاستثناءات الخاصة بالشبكة أو الخطأ العام
        console.log("حدث خطأ: ", error);
        return rejectWithValue("حدث خطأ: " + error.message);
      }
    }
  );


  const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;
  
  const initialState = {
    loading: false,
    userInfo: [],
    userToken,
    errorReg: null,
    errorLogin: null,
    msgerror:null,
    success: false
  };



  export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      logout: (state) => {
        state.userToken = localStorage.removeItem("userToken");
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(registerUser.pending, (state, action) => {
          state.loading = true;
          state.errorReg = null;
          console.log("يتم التحميل")
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          state.loading = false;
          state.errorReg = false;
          state.success = action.payload;
          console.log("تم التحميل ونجح")
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.loading = false;
          state.errorReg = true;
          console.log("تم التحميل فشل")
          console.log(action.payload);
        })
        // login user
        .addCase(loginUser.pending, (state, action) => {
          state.loading = true;
          state.errorLogin = null;
          console.log("يتم التحميل")
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.errorLogin = false;
          state.userInfo = action.payload.data;
          
          state.userToken = action.payload.access_token;
          console.log("تم التحميل ونجح")
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.errorLogin = true;

          console.log("تم التحميل فشل")
         
        });
    }
  });

  export default authSlice.reducer;