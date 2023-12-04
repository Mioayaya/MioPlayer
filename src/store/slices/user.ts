import { createSlice } from "@reduxjs/toolkit";
import { Istore } from "../../type";

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    isSign: false,
    userData: {}
  },
  reducers: {
    setSign: (state:Istore.IuserSlice,{payload}:{payload:boolean}) => {
      state.isSign = payload;
    }
  }
});

const { setSign } = userSlice.actions;
export const userSliceActions = {
  setSign,
}

export default userSlice.reducer;