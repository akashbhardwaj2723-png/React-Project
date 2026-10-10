import { createSlice } from "@reduxjs/toolkit";

const seacrhSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loding: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
      state.loding = false;
    },
    setResults(state, action) {
      state.results = action.payload;
      state.loding = false;
    },
    setLoding(state) {
      state.loding = true;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loding = false;
    },
    clearResult(state) {
      state.results = [];
    },
  },
});

export const { setQuery, setActiveTab, setLoding, setError, setResults } =
  seacrhSlice.actions;
export default seacrhSlice.reducer;
