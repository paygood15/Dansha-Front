import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    Adresses: [],
    loading: true,
    error: false,
  };


//   export const getAdresses = createAsyncThunk(
//     "Adresses/getAdresses",
//     async () => {
//       const token = localStorage.getItem("userToken");
//       try {
//         const response = await axios.get(
//           `https://back-dansha1.onrender.com/api/v1/users/getMe`,
//           {
      
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           }
//         );
//         return response.data;
//       } catch (error) {
//         // يمكنك التعامل مع الأخطاء هنا
//         console.error('Error fetching data:', error);
//         throw error;
//       }
//     }
//   );

  export const CreateAdresses = createAsyncThunk(
    "Adresses/CreateAdresses",
    async (data, thunkAPI) => {
      try {
        console.log(data);
        const token = localStorage.getItem("userToken");
        const response = await axios.post(
          "https://back-dansha1.onrender.com/api/v1/addresses",
          data,
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
  

  const AdressesSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(CreateAdresses.pending, (state) => {
        state.loading = true;
       console.log("يتم التحميل");
      });
      builder.addCase(CreateAdresses.fulfilled, (state, action) => {
        state.loading = false;
        console.log("تم التحميل ونجح");
        console.log(action.payload);
      });
      builder.addCase(CreateAdresses.rejected, (state) => {
        state.loading = false;
        state.error = true;
        console.log("تم التحميل فشل");
      });
   
    
    },
  });

  export default AdressesSlice.reducer;