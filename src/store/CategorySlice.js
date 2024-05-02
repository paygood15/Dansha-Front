import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  categories: [],
  OneCategorey:[],
  GetOneEditCategorey:[],
  categoriesAdmin: [],
  loadingCategories: true,
  errorCategories: false,
};

export const getAllCategories = createAsyncThunk(
  "category/getAllCategories",
  async (limit) => {
    const response = await axios.get(
      `https://back-dansha1.onrender.com/api/v1/categories?limit=${limit}`
    );
    return response.data;
  }
);
export const getOneCategorey = createAsyncThunk(
  "category/getOneCategorey",
  async (_id) => {
    const response = await axios.get(
      `https://back-dansha1.onrender.com/api/v1/products?category[in][]=${_id}`
      
    );
    console.log("OneCategory",response.data);
    return response.data;
  }
);
export const getOneEditCategorey = createAsyncThunk(
  "category/getOneEditCategorey",
  async (_id) => {
    const response = await axios.get(
      `https://back-dansha1.onrender.com/api/v1/categories/${_id}`
      
    );
    console.log("OneCategory",response.data);
    return response.data;
  }
);
export const getAdminCategories = createAsyncThunk(
  "category/getAdminCategories",
  async (page) => {
    const response = await axios.get(
      `https://back-dansha1.onrender.com/api/v1/categories`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  }
);
export const addCategory = createAsyncThunk(
  "product/addProduct",
  async (categoryData, thunkAPI) => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.post(
        "https://back-dansha1.onrender.com/api/v1/categories",
        categoryData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          },
        }
      );

      return response.data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue("Failed to add Category");
      }
    }
  }
);
export const editCategory = createAsyncThunk(
    "product/EditCategory",
    async ({ id, formData }, thunkAPI) => {
      try {
        const token = localStorage.getItem("userToken");
        const response = await axios.put(
          `https://back-dansha1.onrender.com/api/v1/categories/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`
            },
          }
        );
  
        return response.data;
      } catch (error) {
        if (error.response) {
          return thunkAPI.rejectWithValue(error.response.data);
        } else {
          return thunkAPI.rejectWithValue("Failed to add Category");
        }
      }
    }
  );

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.delete(
        `https://back-dansha1.onrender.com/api/v1/categories/${id}`,
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
const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state) => {
      state.loadingCategories = true;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.loadingCategories = false;
      state.errorCategories = false;
      state.categories = action.payload;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.loadingCategories = false;
      state.errorCategories = true;
      state.error = action.payload;
    });
    builder.addCase(getOneCategorey.pending, (state) => {
      state.loadingCategories = true;
      console.log("يتم التحميل ");
    });
    builder.addCase(getOneCategorey.fulfilled, (state, action) => {
      state.loadingCategories = false;
      state.errorCategories = false;
      state.OneCategorey = action.payload;
      console.log("تم التحميل ونجح");
    });
    builder.addCase(getOneCategorey.rejected, (state, action) => {
      state.loadingCategories = false;
      state.errorCategories = true;
            console.log("تم التحميل وفشل");
    });

    builder.addCase(getOneEditCategorey.pending, (state) => {
      state.loadingCategories = true;
      console.log("يتم التحميل ");
    });
    builder.addCase(getOneEditCategorey.fulfilled, (state, action) => {
      state.loadingCategories = false;
      state.errorCategories = false;
      state.GetOneEditCategorey = action.payload;
      console.log("تم التحميل ونجح");
    });
    builder.addCase(getOneEditCategorey.rejected, (state, action) => {
      state.loadingCategories = false;
      state.errorCategories = true;
            console.log("تم التحميل وفشل");
    });
    
    builder.addCase(getAdminCategories.pending, (state) => {
      state.loadingCategories = true;
      state.errorCategories = false;
    });
    builder.addCase(getAdminCategories.fulfilled, (state, action) => {
      state.loadingCategories = false;
      state.errorCategories = false;
      state.categoriesAdmin = action.payload;
    });
    builder.addCase(getAdminCategories.rejected, (state) => {
      state.loadingCategories = false;
      state.errorCategories = true;
    });

    builder.addCase(addCategory.pending, (state) => {
      state.loadingCategories = true;
    });
    builder.addCase(addCategory.fulfilled, (state) => {
      state.loadingCategories = false;
      state.errorCategories = false;
    });
    builder.addCase(addCategory.rejected, (state) => {
      state.loadingCategories = false;
      state.errorCategories = true;
    });
    builder.addCase(editCategory.pending, (state) => {
        state.loadingCategories = true;
        console.log("يتم التحميل ");

      });
      builder.addCase(editCategory.fulfilled, (state,action) => {
        state.loadingCategories = false;
        state.errorCategories = false;
        console.log("تم التحميل ونجح");
        console.log(action.payload);
      });
      builder.addCase(editCategory.rejected, (state,action) => {
        state.loadingCategories = false;
        state.errorCategories = true;
        console.log("تم التحميل وفشل");
        console.log(action.payload);
      });
    builder.addCase(deleteCategory.pending, (state) => {
      state.loadingCategories = true;
    });
    builder.addCase(deleteCategory.fulfilled, (state) => {
      state.loadingCategories = false;
      state.errorCategories = false;
    });
    builder.addCase(deleteCategory.rejected, (state) => {
      state.loadingCategories = false;
      state.errorCategories = true;
    });
  },
});
export default CategorySlice.reducer;
