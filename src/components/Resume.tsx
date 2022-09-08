import React, { useEffect, useState } from "react"

function Resume(){
  const [auth, setAuth] = useState(false)
  useEffect(()=>{
    const password = prompt("Please enter your password.");

    if (password === 'r') {
      setAuth(true)
      // const target = document.querySelector('header > div:last-child > div > a') as HTMLElement
      // target.style.setProperty('display', 'block', 'important');
      window.location.replace('/tags/resume')
    } else{
      setAuth(false)
    }
  },[])

  return auth ? null:<>Invalid password.</>
}

export default Resume

