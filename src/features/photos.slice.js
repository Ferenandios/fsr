import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  photos: [],
  isReject: false
}

// API Settings
const CLIENT_ID = '5n0MkG8mZ6VVE6E4qQ-7woe-jtiKXUhzGYgEoHUMbjU' // Access key
const COUNT     = 5 // Number of items per page
let   PAGE      = 1 // Page number to retrieve

export const getRandomPhotos = createAsyncThunk('photos/getRandomPhotos', async (_, { dispatch }) => {
  const res = await axios.get(`https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=${COUNT}`)
  
  dispatch(setRandomPhotos(res.data))
})

export const getSearchPhotos = createAsyncThunk('search/getSearchPhotos', async (payload, { dispatch }) => {
  const QUERY     = payload
  const res = await axios.get(`https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&per_page=${COUNT}&query=${QUERY}&page=${PAGE}`)
  PAGE = PAGE + 1 // Update page number to retrieve
  dispatch(setSearchPhotos(res.data))
})

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setRandomPhotos: (state, action) => {
      state.photos = state.photos.concat(action.payload)
    },
    displayReject: state => {
      state.isReject = true
    },
    setSearchPhotos: (state, action) => {
      const payloadArray = action.payload.results
      state.photos = state.photos.concat(payloadArray)
    }
  },
  extraReducers: {
    [getRandomPhotos.rejected]: (state) => {
      state.isReject = true
    },
    [getSearchPhotos.fulfilled]: state => {
      if (!state.photos.length) {
        state.isReject = true
      }
      else {
        state.isReject = false
      }
    }
  }
})

export const { setRandomPhotos, displayReject, setSearchPhotos } = photosSlice.actions
export default photosSlice.reducer