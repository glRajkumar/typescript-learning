export type themeContextProviderType = {
  children: React.ReactNode
}

export type updateThemePropsType = "primary" | "dark"

type theme = {
  main: string
  text: string
}

export type themeContextType = {
  themes: {
    primary: theme
    dark: theme
  },
  currentTheme: updateThemePropsType
  updateTheme: (val: updateThemePropsType) => void
}
