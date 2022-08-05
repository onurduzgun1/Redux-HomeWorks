import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchText = createAsyncThunk("text/fetchText", async ({paras, format}) => {
    const res =  await axios(`https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${format}`);
    console.log('res.data', res.data);
    return res.data;
});

export const textSlice = createSlice({
    name: "text",
    initialState: {
        items: [],
        paras: 4,
        format: "text",
    },
    reducers: {
        setParas: (state, action) => {
            state.paras = action.payload;
        },
        setFormat: (state, action) => {
            state.format = action.payload;
        },
    },
    extraReducers: {
        [fetchText.fulfilled]: (state,action) => {
            state.items = action.payload;
        },
    }
})

export const { setParas, setFormat } = textSlice.actions;
export default textSlice.reducer; //store'da import edip reducer field'a verebilmek icin.
