import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    UsersAll: [],
    loading: true,
    error: false,
  };

  
export const getAllUsers = createAsyncThunk(
    "Users/getAllUsers",
    async (page) => {
      const token = localStorage.getItem("userToken");
      try {
        const response = await axios.get(
          `https://back-dansha1.onrender.com/api/v1/users?limit=8&page=${page}`,
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

  export const deleteUser = createAsyncThunk(
    "Users/deleteUser",
    async (id, thunkAPI) => {
      try {

        const token = localStorage.getItem("userToken");
        const response = await axios.delete(
          `https://back-dansha1.onrender.com/api/v1/users/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
          }
        );
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  const UserSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getAllUsers.pending, (state) => {
        state.loading = true;
       
      });
      builder.addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.UsersAll = action.payload;
      });
      builder.addCase(getAllUsers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
      builder.addCase(deleteUser.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(deleteUser.fulfilled, (state) => {
        state.loading = false;
      });
      builder.addCase(deleteUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
    
    },
  });

  export default UserSlice.reducer;