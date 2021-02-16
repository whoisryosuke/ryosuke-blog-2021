import React from "react"
import styled from "styled-components"
import { typography, color, variant, TypographyProps, ColorProps } from "styled-system"
import { fonts } from "../theme/light"

export type TextVariants =
  | "heading"
  | "subheader"
  | "h2"
  | "h3"
  | "h4"
  | "label"
  | "paragraph"
  | "list"
  | "display"
  | "caps"

type TextVariant = {
  variant: TextVariants
}

export type TextProps = TextVariant &
  TypographyProps &
  ColorProps & {
    children: React.ReactChild
  }

const Text = styled.p<TextProps>`
  ${typography}
  ${color}

  ${variant({
    variants: {
      header: {
        fontFamily: fonts.heading,
        lineHeight: `1.25`,
        fontSize: [6, 6, 6, 6],
        marginBottom: 3,
      },
      subheader: {
        fontFamily: fonts.heading,
        lineHeight: `1.25`,
        fontSize: [3, 3, 4, 4],
        marginBottom: 3,
      },
      h2: {
        fontFamily: fonts.heading,
        lineHeight: `1.25`,
        fontSize: [2, 3, 4, 5],
        marginBottom: 3,
      },
      h3: {
        fontFamily: fonts.heading,
        lineHeight: `1.25`,
        fontSize: [2, 2, 3, 3],
        marginBottom: 3,
      },
      h4: {
        fontFamily: fonts.heading,
        lineHeight: `1.25`,
        fontSize: [1],
        marginBottom: 3,
      },
      label: {
        fontFamily: fonts.heading,
        lineHeight: `1.25`,
        fontSize: [0],
        letterSpacing: `0.1em`,
        textTransform: `uppercase`,
      },
      paragraph: {
        fontFamily: fonts.body,
        lineHeight: `1.75`,
        fontSize: [1, 2],
        marginBottom: 4,
        "& code": {
          py: 1,
          px: 2,
          mx: 1,
          border: `1px solid`,
          borderColor: `black`,
          backgroundColor: `muted`,
          color: `primary`,
        },
      },
      list: {
        fontFamily: fonts.body,
        lineHeight: `1.75`,
        fontSize: [1, 2],
        marginBottom: 3,
      },
      display: {
        fontFamily: fonts.body,
        lineHeight: `1.5`,
        fontSize: [5, 6, 7],
      },
      caps: {
        textTransform: `uppercase`,
        letterSpacing: `0.1em`,
      },
    },
  })}
`

export default Text
