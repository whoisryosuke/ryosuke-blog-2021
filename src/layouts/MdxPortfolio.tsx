import React from "react"

interface Props {
  children: React.ReactChild
}

const MdxPortfolio = ({ children }: Props) => {
  return <div>{children}</div>
}

export default MdxPortfolio
