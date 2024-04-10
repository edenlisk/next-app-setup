import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface initialStateTypes {
    username: string,
    userId: string,
    token: string
}

const initialState: initialStateTypes = {
    username: '',
    userId: '',
    token: 'dummy token'
}
const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setToken: (state, action: PayloadAction<any>) => {
            state.token = action.payload;
        },
    }
})

export const { setToken } = auth.actions;
export default auth.reducer;