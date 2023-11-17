import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name:'testSlice',
  initialState: {
    test: 'test'
  },
  reducers: {
    test: (state:{test:string},{payload}:{payload:string}) => {
      state.test = payload;
    }
  }
});

const { test } = testSlice.actions;
export const testSliceActions = {
  test
}
export default testSlice.reducer;


