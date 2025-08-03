import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ThemeType = 'theme1' | 'theme2' | 'theme3' ;

interface ThemeState {
    currentTheme : ThemeType
}

const initialState : ThemeState = {
    currentTheme : (localStorage.getItem('app-theme') as ThemeType || 'theme1')
}

const themeSlice = createSlice({
    name: 'theme',
    initialState ,
    reducers: {
        setTheme : (state, action: PayloadAction<ThemeType>) =>{
            state.currentTheme = action.payload
            localStorage.setItem('app-theme', action.payload)
        }
    }
})

export const {setTheme} = themeSlice.actions ;
export default themeSlice.reducer