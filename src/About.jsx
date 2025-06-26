import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()
  return (
    <div>
      <div>About us. All the info is here</div>
      <div><button onClick={() => navigate('/home')}>back to home page</button></div>
    </div>
  )
}

export default About