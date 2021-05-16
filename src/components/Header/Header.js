import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { setStorage, getStorage } from '../../storage/storage'
import Nav from '../Nav/Nav'
import Toggle from '../Toggle/Toggle'

const dark = {
  '--color-accent': 'orangered',
  '--color-primary': '#bfbfbf',
  '--color-text': '#bfbfbf',
  '--color-main-bg': '#181818',
  '--color-second-bg': '#282828',
  '--color-shadow': 'rgba(0, 0, 0, 1)',
  '--color-border': '#000000'
}
const light = {
  '--color-accent': 'orangered',
  '--color-primary': '#ffffff',
  '--color-text': '#000000',
  '--color-main-bg': '#eeeeee',
  '--color-second-bg': '#ffffff',
  '--color-shadow': 'rgba(0, 0, 0, 0.6)',
  '--color-border': '#000000'
}
const THEME = 'theme'

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(getStorage(THEME, true))

  useEffect(() => {
    const theme = getStorage(THEME, true)
    setDarkTheme(theme)
    theme ? setProperty(dark) : setProperty(light)
  }, [])
  
  const setProperty = theme => {
    Object.keys(theme).forEach(item => {
      document.documentElement.style.setProperty(item, theme[item])
    })
  }
  const changeTheme = e => {
    const checked = e.target.checked
    checked ? setProperty(dark) : setProperty(light)
    
    setDarkTheme(checked)
  }

  useEffect(() => setStorage(THEME, darkTheme), [darkTheme])
  
  return (
    <header className={styles.header}>
      <Nav />
      <Toggle
        size='s'
        trueContent={<span className='material-icons'>dark_mode</span>}
        falseContent={<span className='material-icons'>light_mode</span>}
        checked={darkTheme}
        onChange={changeTheme}
      />
    </header>
  )
}
