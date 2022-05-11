import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) =>{
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users', {})
//         dispatch(userSlice.actions.usersFetchingSuccess(res.data));
//     } catch (e) {
//         // @ts-ignore
//         dispatch(userSlice.actions.usersFetchingError(e.message));
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunckAPI) => {
        try {
            const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return res.data
            
        } catch (e) {
            return thunckAPI.rejectWithValue('Не удалось загрузить юсеров')
        }
    }
)

