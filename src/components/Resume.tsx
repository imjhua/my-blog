import React, { useEffect, useState } from "react"

function Resume(){
  const [mesaage, setMesaage] = useState('')
  useEffect(()=>{
    const password = prompt("Please enter your password.");

    if (password === '890') {
      // const target = document.querySelector('header > div:last-child > div > a') as HTMLElement
      // target.style.setProperty('display', 'block', 'important');
      window.location.replace('/tags/resume')
    } else{
      setMesaage('Invalid password.')
    }
  },[])

  return <>{mesaage}</>
}

export default Resume

