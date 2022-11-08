import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folders: [],
};

const myFolders = createSlice({
  name: "folders",
  initialState,
  reducers: {
    getNewFolder(state, action) {
      state.folders.push(action.payload);
    },
    complatedTask(state, action) {
      const complate = state.folders.find(
        (folder) => folder.id === action.payload
      );
      complate.complated = !complate.complated;
    },
    removeFolder(state, action) {
      state.folders = state.folders.filter(
        (folder) => folder.id !== action.payload
      );
    },
  },
});

export const { getNewFolder, removeFolder, complatedTask } = myFolders.actions;
export default myFolders.reducer;
