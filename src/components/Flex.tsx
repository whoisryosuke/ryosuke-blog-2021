import React from "react"
import styled from "styled-components"
import {
  space,
  layout,
  background,
  flexbox,
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  FlexboxProps,
} from "styled-system"

export type FlexProps = SpaceProps &
  LayoutProps &
  BackgroundProps &
  FlexboxProps & {
    children: React.ReactChild
  }
const Flex = styled.div<FlexProps>`
  ${space}
  ${layout}
  ${background}
  ${flexbox}
`

export default Flex
