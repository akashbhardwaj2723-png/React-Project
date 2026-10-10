import {configureStore}  from "@reduxjs/toolkit"
import searchReducer from "./features/searchSlise"
import collectionReducer from "./features/collectionSlice"

export  const store = configureStore({
  reducer:{
     search : searchReducer,
     collection:collectionReducer,

  }
})