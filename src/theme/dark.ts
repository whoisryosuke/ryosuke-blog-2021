import light from "./light"

export const colors = {
  text: `#fff`,
  background: `#111212`,
  primary: `#005CDD`,
  secondary: `#6D59F0`,
  muted: `#f6f6f9`,
  gray: `#D3D7DA`,
  highlight: `hsla(205, 100%, 40%, 0.125)`,
}

export const theme = {
  ...light,
  colors: {
    ...light.colors,
    ...colors,
  },
}

export default theme
