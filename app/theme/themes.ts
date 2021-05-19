export type Theme = {
  isDark: boolean
  background: string
  secondaryBackground:string
  label: string
  secondaryLabel: string,
  placeholderText: string,
  inputBackground: string,
  inputPlaceholderBackground: string,
  disabled: string,
  link: string,
  separator: string,
  primary: string,
  secondary: string,
  dimmer: string
}

export const LightTheme: Theme = {
  isDark: false,
  background: '#f2f2f7',
  secondaryBackground: '#ffffff',
  label: '#111111',
  secondaryLabel: '#757575',
  placeholderText: '#afb4bd',
  inputBackground: '#ffffff',
  inputPlaceholderBackground: '#e0e1e6',
  disabled: '#aeaeb2',
  link: '#2196F3',
  separator: '#bdbdc2',
  primary: '#2196f3',
  secondary: '#fa827e',
  dimmer: '#e0e1e6'
}

export const DarkTheme: Theme = {
  isDark: true,
  background: '#1c1c1e',
  secondaryBackground: '#000000',
  label: '#ffffff',
  secondaryLabel: '#98989f',
  placeholderText: '#afb4bd',
  inputBackground: '#2c2c2e',
  inputPlaceholderBackground: '#3a3a3c',
  disabled: '#48484a',
  link: '#0c83ff',
  separator: '#3e3e41',
  primary: '#0c83ff',
  secondary: '#6F68DF',
  dimmer: '#3a3a3c'
}

// export const themes = {
//   light: lightTheme,
//   dark: darkTheme,
// }
