import React from "react"
import styled from "styled-components"
import { typography, color, TypographyProps, ColorProps } from "styled-system"

export type TextProps = TypographyProps &
  ColorProps & {
    children: React.ReactChild
  }

const Text = styled.div<TextProps>`
  ${typography}
  ${color}
`

export default Text
