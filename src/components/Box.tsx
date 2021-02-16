import React from "react"
import styled from "styled-components"
import {
  space,
  layout,
  background,
  position,
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  PositionProps,
} from "styled-system"

export type BoxProps = SpaceProps &
  LayoutProps &
  BackgroundProps &
  PositionProps & {
    children: React.ReactChild
  }

const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${background}
  ${position}
`

export default Box
