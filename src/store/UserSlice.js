import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    User: [],
     role: [],
    loading: true,
    error: false,
  };



  export const getUser = createAsyncThunk(
    "User/getUser",
    async () => {
      const token = localStorage.getItem("userToken");
      try {
        const response = await axios.get(
          `https://back-dansha1.onrender.com/api/v1/users/getMe`,
          {
      
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


  const UsermeSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getUser.pending, (state) => {
        state.loading = true;
       
      });
      builder.addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.User = action.payload;
        state.User.role = action.payload.role;
      });
      builder.addCase(getUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  
    
    },
  });

  export default UsermeSlice.reducer;