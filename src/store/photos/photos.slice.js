import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

  // const CLIENT_ID = '5n0MkG8mZ6VVE6E4qQ-7woe-jtiKXUhzGYgEoHUMbjU'
  // const CLIENT_ID = ''
  // const COUNT = 5
  // const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=${COUNT}`
  // const url = '../../api.json'
  // const response = await fetch(url)
  // if (response.ok) {
  //   await response.then(res => res.json())
  //   console.log(response);
  // state.photos = state.photos.concat(data)

const photos = createSlice({
  name: 'photos',
  initialState: {
    photos: []
  },
  reducers: {
    fetchDataSuccess: (data) => {
      fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
      
    }
  }
})

export default photos.reducer
export const { generateNewPhotos } = photos.actions