import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    textView: "Example",
};

const textViewSlice = createSlice({
    name: 'textView',
    initialState,
    reducers: {
        updateTextView: (state, action) => {
            state.textView = action.payload;
        },
    },
});

const store = configureStore({
    reducer: {
        textView: textViewSlice.reducer,
    },
});

export const { updateTextView } = textViewSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export default store;