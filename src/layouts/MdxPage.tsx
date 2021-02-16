import React from "react"

interface Props {
  children: React.ReactChild
}

const MdxPage = ({ children }: Props) => {
  return <div>{children}</div>
}

export default MdxPage
