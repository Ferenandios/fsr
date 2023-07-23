import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

// const toolkitSlice = createSlice({
//   name: 'toolkit',
//   initialState: {
//     photos: []
//   },
//   reducers: {
//     async generateNewPhotos(state) {
//       const CLIENT_ID = '5n0MkG8mZ6VVE6E4qQ-7woe-jtiKXUhzGYgEoHUMbjU'
//       const CLIENT_ID = '' 
//       const COUNT = 5
//       const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=${COUNT}`
//       const response = await fetch(url)
//       const data = await response.json()
//       if (response.ok && data.length) {
//         state.photos = state.photos.concat(data)
//       }
//     }
//   }
// })

// const store = configureStore({reducer: toolkitSlice})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);