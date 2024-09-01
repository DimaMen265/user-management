import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../types/User';

interface UserState {
    users: User[];
    filteredUsers: User[];
    filters: {
        name: string;
        username: string;
        email: string;
        phone: string;
    };
};

const initialState: UserState = {
    users: [],
    filteredUsers: [],
    filters: {
        name: '',
        username: '',
        email: '',
        phone: '',
    },
};

export const fetchUsers = createAsyncThunk('users/fetchUSers', async () => {
    const responce = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return responce.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<{ key: keyof UserState['filters']; value: string }>) => {
            const { key, value } = action.payload;
            state.filters[key] = value;
            state.filteredUsers = state.users.filter(user => {
                return Object.keys(state.filters).every(filterKey => {
                    const filterValue = state.filters[filterKey as keyof UserState['filters']];
                    return user[filterKey as keyof User].toString().toLowerCase().includes(filterValue.toLowerCase());
                });
            });
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.filteredUsers = action.payload;
        });
    },
});

export const { setFilter } = userSlice.actions;
export const userReducer = userSlice.reducer;
