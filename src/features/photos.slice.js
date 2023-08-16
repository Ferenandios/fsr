import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  photos: [],
  isReject: false
}

export const getPhotos = createAsyncThunk('photos/getPhotos', async (_, { dispatch }) => {
  const CLIENT_ID = '5n0MkG8mZ6VVE6E4qQ-7woe-jtiKXUhzGYgEoHUMbjU'
  const COUNT     = 5
  const res = await axios.get(`https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=${COUNT}`)
  dispatch(setPhotos(res.data))
})

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setPhotos: (state, action) => {
      state.photos = state.photos.concat(action.payload)
    },
    displayReject: state => {
      state.isReject = true
    }
  },
  extraReducers: {
    [getPhotos.rejected]: (state) => {
      state.isReject = true
    }
  }
})

export const { setPhotos, displayReject } = photosSlice.actions
export default photosSlice.reducer