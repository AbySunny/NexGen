// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   isLoading: false,
//   featureImageList: [],
// };




// export const getFeatureImages = createAsyncThunk(
//   "/order/getFeatureImages",
//   async () => {
//     const response = await axios.get(
//       `http://localhost:5000/api/common/feature/get`
//     );

//     return response.data;
//   }
// );


// export const addFeatureImage = createAsyncThunk(
//   "/order/addFeatureImage",
//   async (image) => {
//     const response = await axios.post(
//       `http://localhost:5000/api/common/feature/add`,
//       { image }
//     );

//     return response.data;
//   }
// );

// const commonSlice = createSlice({
//   name: "commonSlice",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getFeatureImages.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getFeatureImages.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.featureImageList = action.payload.data;
//       })
//       .addCase(getFeatureImages.rejected, (state) => {
//         state.isLoading = false;
//         state.featureImageList = [];
//       });
//   },
// });





// export default commonSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  featureImageList: [],
};

// Get Feature Images (existing)
export const getFeatureImages = createAsyncThunk(
  "/order/getFeatureImages",
  async () => {
    const response = await axios.get(
      `http://localhost:5000/api/common/feature/get`
    );
    return response.data;
  }
);

// Add Feature Image (existing)
export const addFeatureImage = createAsyncThunk(
  "/order/addFeatureImage",
  async (image) => {
    const response = await axios.post(
      `http://localhost:5000/api/common/feature/add`,
      { image }
    );
    return response.data;
  }
);

// Delete Feature Image (new action)
export const deleteFeatureImage = createAsyncThunk(
  "/order/deleteFeatureImage",
  async (imageId) => {
    const response = await axios.delete(
      `http://localhost:5000/api/common/feature/delete/${imageId}`
    );
    return response.data; // Assuming this contains a success or failure response
  }
);

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get Feature Images
      .addCase(getFeatureImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeatureImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList = action.payload.data;
      })
      .addCase(getFeatureImages.rejected, (state) => {
        state.isLoading = false;
        state.featureImageList = [];
      })
      
      // Add Feature Image
      .addCase(addFeatureImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFeatureImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList.push(action.payload.data);
      })
      .addCase(addFeatureImage.rejected, (state) => {
        state.isLoading = false;
      })
      
      // Delete Feature Image
      .addCase(deleteFeatureImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFeatureImage.fulfilled, (state, action) => {
        state.isLoading = false;
        // Remove the deleted image from the featureImageList
        state.featureImageList = state.featureImageList.filter(
          (image) => image.id !== action.payload.id
        );
      })
      .addCase(deleteFeatureImage.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default commonSlice.reducer;
