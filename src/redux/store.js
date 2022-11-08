import { configureStore } from "@reduxjs/toolkit";
import sliceFolder from "./slice-folder/sliceFolder";

export const store = configureStore({
    reducer : {
        folder : sliceFolder
    }
})