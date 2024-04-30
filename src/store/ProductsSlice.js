import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  product: [],
  recentProducts: [],
  solutionProducts: [],
  loading: true,
  error: false,
};
export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (page) => {
    const response = await fetch(
      `https://back-dansha1.onrender.com/api/v1/products?limit=8&page=${page}`
    );
    const data = await response.json();
    return data;
  }
);
export const getRecentProducts = createAsyncThunk(
  "product/getRecentProducts",
  async () => {
    const response = await fetch(
      "https://back-dansha1.onrender.com/api/v1/products"
    );
    const data = await response.json();
    return data;
  }
);

export const getSolutionProduct = createAsyncThunk(
  "product/getSolutionProduct",
  async (productId, page) => {
    const response = await fetch(
      `https://back-dansha1.onrender.com/api/v1/products?category[in][]=${productId}&limit=8&page=${page}`
    );
    const data = await response.json();
    return data;
  }
);
export const getSingleProduct = createAsyncThunk(
  "product/getSingleProduct",
  async (productId) => {
    const response = await fetch(
      `https://back-dansha1.onrender.com/api/v1/products/${productId}`
    );
    const data = await response.json();
    return data;
  }
);
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (productData, thunkAPI) => {
    try {
      console.log(productData);
      const token = localStorage.getItem("userToken");
      const response = await axios.post(
        "https://back-dansha1.onrender.com/api/v1/products",
        productData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          },
        }
      );
      console.log("sdadsa");
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



export const editProduct = createAsyncThunk(
  "product/editProduct",
  async ({ id, formData }, thunkAPI) => {
    try {
      console.log(id);
      console.log(formData);
      const token = localStorage.getItem("userToken");
      const response = await axios.put(
        `https://back-dansha1.onrender.com/api/v1/products/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          },
        }
      );
      console.log(id);
      console.log(formData);
      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue("Failed to edit product");
      }
    }
  }
);

export const deleteProducts = createAsyncThunk(
  "product/deleteProducts",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.delete(
        `https://back-dansha1.onrender.com/api/v1/products/${id}`,
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
const ProductsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
      state.products = [];
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(deleteProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProducts.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteProducts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(getRecentProducts.pending, (state) => {
      state.loading = true;
      state.recentProducts = [];
    });
    builder.addCase(getRecentProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.recentProducts = action.payload;
    });
    builder.addCase(getRecentProducts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(getSolutionProduct.pending, (state) => {
      state.loading = true;
      state.solutionProducts = [];
    });
    builder.addCase(getSolutionProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.solutionProducts = action.payload;
    });
    builder.addCase(getSolutionProduct.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(getSingleProduct.pending, (state) => {
      state.loading = true;
      state.product = [];
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(getSingleProduct.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(addProduct.pending,(state, action) => {
      state.loading = true;
      console.log("يتم التحميل ");

    });
    builder.addCase(addProduct.fulfilled,(state, action)=> {
      state.loading = false;
      state.error = false;
      console.log("تم التحميل ونجح");
      console.log(action.payload);

    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      console.log("تم التحميل وفشل");
      console.log(action.payload);
    });
    builder.addCase(editProduct.pending, (state, action) => {
      state.loading = true;
      console.log("يتم التحميل ");
    });
    builder.addCase(editProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      console.log("تم التحميل ونجح");
      console.log(action.payload);
    });
    builder.addCase(editProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      console.log("تم التحميل وفشل");
      console.log(action.payload);
    });
  },
});
export default ProductsSlice.reducer;
