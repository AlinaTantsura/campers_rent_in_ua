import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://662b5a5dde35f91de157f157.mockapi.io";

export const fetchData = createAsyncThunk(
    "adverts/fetchAll",
    async (page, thunkAPI) => {
        try {
            const resp = await axios.get(`api/adverts?page=${page}&limit=4`);
            return resp.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
        
    }
)