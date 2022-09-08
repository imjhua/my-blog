import styled from "@emotion/styled"
import React from "react"

function Resume(){
  const handleButtonClick = () => {
    const target = document.querySelector('header > div:last-child > div') as HTMLElement
    target.style.setProperty('display', 'block', 'important');
  }

  return(
    <Block onClick={handleButtonClick}>!!!!!</Block>
  )
}

export default Resume


const Block = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  margin: 0 !important;
  text-align: center;
  color: var(--theme-ui-colors-background);
`