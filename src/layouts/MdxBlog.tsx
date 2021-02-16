import React from "react"

interface Props {
  children: React.ReactChild
}

const MdxBlog = ({ children }: Props) => {
  return <div>{children}</div>
}

export default MdxBlog
