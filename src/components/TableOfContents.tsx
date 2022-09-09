import { css } from '@emotion/react'
import styled from "@emotion/styled"
import React, { useState } from "react"

const TableOfContents = ({ content }) => {
  const [full, setFull] = useState(false)
  const [open, setOpen] = useState(true)
  return (
    <TocBlock full={full} onClick={()=>{setFull((state)=>(!state))}}>
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
  float: right;
  margin-top: -4px;
  margin-right: -4px;
`
const TocBlock = styled.div<{full:boolean}>`
  position: fixed;
  ${({full})=> full ?
    css`
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      max-width: 100vw;
    `
    :
    css`
      top: 160px;
      right: 10px;
      max-width: 80vw;
    `
  }
  z-index: 1;
  background-color: var(--theme-ui-colors-muted);
  padding: 10px 10px 0;
  border-radius: 10px;
  ul {
    min-width: 40vw;
    li {
      line-height: 1.4rem;
      p {
        margin: 0;
      }
      a {
        font-size: 0.8rem !important;
      }
    }
  }
`