import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://661ff4d93bf790e070ae8aa7.mockapi.io";

export const fetchData = createAsyncThunk(
    "adverts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get('api/advert');
            return resp.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
        
    }
)