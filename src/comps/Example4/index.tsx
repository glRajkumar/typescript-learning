import { createContext, useContext, useState } from 'react';
import { themeContextProviderType, themeContextType, updateThemePropsType } from './props';

const initialState = {
  primary: {
    main: "#3f51b5",
    text: "#000"
  },
  dark: {
    main: "#101010",
    text: "#fff"
  },
}

const ThemeContext = createContext<themeContextType | null>(null)

const ThemeContextProvider = ({ children }: themeContextProviderType) => {
  const [currentTheme, setCurrentTheme] = useState<updateThemePropsType>("primary")

  const updateTheme = (val: updateThemePropsType) => {
    setCurrentTheme(val)
  }

  return (
    <ThemeContext.Provider value={{
      themes: { ...initialState },
      currentTheme,
      updateTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

function Content() {
  const context = useContext(ThemeContext)

  return (
    <div>
      <button
        style={{
          backgroundColor: context?.themes?.primary?.main,
          color: context?.themes?.primary?.text
        }}
        onClick={() => context?.updateTheme("primary")}
      >
        Primary btn
      </button>

      <button
        style={{
          backgroundColor: context?.themes?.dark?.main,
          color: context?.themes?.dark?.text
        }}
        onClick={() => context?.updateTheme("dark")}
      >
        Seconday btn
      </button>

      <p
        style={{
          backgroundColor: context?.themes?.[context?.currentTheme]?.main,
          color: context?.themes?.[context?.currentTheme]?.main
        }}
      >
        Selected Theme
      </p>
    </div>
  )
}

function Example4() {
  return (
    <ThemeContextProvider>
      <Content />
    </ThemeContextProvider>
  )
}

export default Example4