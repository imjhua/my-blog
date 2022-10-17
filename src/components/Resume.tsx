import React, { useEffect, useState } from "react"

function Resume(){
  const [mesaage, setMesaage] = useState('')
  const showPrompt = ()=>{
    const password = prompt("Please enter your password.");

    if (password === '890') {
      setMesaage('Check password....')
      // const target = document.querySelector('header > div:last-child > div > a') as HTMLElement
      // target.style.setProperty('display', 'block', 'important');
      window.location.replace('/tags/resume')
    } else{
      setMesaage('Invalid password.')
    }
  }

  useEffect(showPrompt,[])

  return (
    <>
      {mesaage} <button onClick={showPrompt}>로그인 재시도</button>
    </>
  )
}

export default Resume

