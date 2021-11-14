import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default function ThemeToggle() {
  return(
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) return null
        return(
          <div  className="relative inline-block w-16 mr-2 align-middle select-none transition duration-200 ease-in ">
          <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        >
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />{' '}
            
            
          </label>
          <span className="ml-8 text-xs">Dark</span>
          </div>
        )}
      }
    </ThemeToggler>
  )
}