import styled from "@emotion/styled"
import React, { useState } from "react"

const TableOfContents = ({ content }) => {
  const [open, setOpen] = useState(true)
  return (
    <TocBlock>
      <Button onClick={()=>{setOpen((state)=>(!state))}}>📎</Button>
      {open && (<div
        dangerouslySetInnerHTML={{ __html: content }}
      />)}
    </TocBlock>
  )
}

export default TableOfContents


const Button = styled.button`
  background: none;
  border: none;
  width: 100%;
  text-align: right;
`
const TocBlock = styled.div`
  position: fixed;
  top: 120px;
  right: 10px;
  /* opacity: 0.8; */
  z-index: 1;
  background-color: var(--theme-ui-colors-muted);
  padding: 4px 10px;
  max-width: 80vw;
  border-radius: 10px;
  ul {
    margin: 0;
    min-width: 30vw;
    li {
      line-height: 1.4rem;
      p {
        margin: 0;
      }
      a {
        font-size: 0.8rem !important;
        color: var(--theme-ui-colors-text);

        text-decoration: none;
        &:-webkit-any-link{
          text-decoration: none;
        }
      }
    }
  }
`