import { configureStore} from "@reduxjs/toolkit";
import textSlice from "./Text/textSlice"

export const store = configureStore({
    reducer: {
        text: textSlice,
    }
});