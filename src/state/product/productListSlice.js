import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductCategories = createAsyncThunk(
  "product/fetchCategories",
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get("https://fervent.chatrachaya.com/api/product-categories");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const productListSlice = createSlice({
  name: "product/FETCH_CATEGORIES",
  initialState: {
    productList: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productList = action.payload; // Update state with the fetched products
      })
      .addCase(fetchProductCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Export actions
export default productListSlice.reducer;