import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../redux/themeSlice'
import type { RootState } from '../redux/store'

const ThemeDropdown = () => {
    const theme = useSelector((state:RootState) => state.theme.currentTheme);
    const dispatch = useDispatch();
  return (
    <select
    value={theme}
    onChange={(e)=>dispatch(setTheme(e.target.value as any))}
    >
      <option value="theme1">Theme 1</option>
      <option value="theme2">Theme 2</option>
      <option value="theme3">Theme 3</option>
    </select>
  )
}

export default ThemeDropdown