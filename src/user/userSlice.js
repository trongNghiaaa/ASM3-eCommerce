import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,

    isAuthenticated: localStorage.getItem('isAuthenticated') || false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.currentUser = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
            localStorage.setItem('isAuthenticated', state.isAuthenticated);
        },
        logout(state) {
            state.currentUser = null;
            state.isAuthenticated = false;
            localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
            localStorage.setItem('isAuthenticated', state.isAuthenticated);
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
