/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react"
import { MDXProvider as MDXDefaultProvider } from "@mdx-js/react"
import Box from "./Box"
import Flex from "./Flex"
import Text from "./Text"

export const UIComponents = {
  h1: (props) => <Text variant="heading" {...props} />,
  h2: (props) => <Text variant="subheader" {...props} />,
  h3: (props) => <Text variant="h3" {...props} />,
  h4: (props) => <Text variant="h4" {...props} />,
  p: (props) => <Text as="p" variant="paragraph" {...props} />,
  hr: (props) => <Box as="hr" variant="hr" {...props} />,
  //   ul: List,
  //   li: ListItem,
  pre: (props) => <div {...props} />,
  //   code: CodeBlock,
  //   table: Table,
  Flex,
  Box,
  Text,
}

interface Props {
  children: React.ReactChild
}

const MDXProvider = ({ children }: Props) => {
  return <MDXDefaultProvider components={UIComponents}>{children}</MDXDefaultProvider>
}

export default MDXProvider
