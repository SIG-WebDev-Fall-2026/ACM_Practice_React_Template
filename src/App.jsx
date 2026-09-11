import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Container from './Container.jsx'
import './App.css'

function App() {
  return (
    <>
      <div className='grid-container'>
        <Container>Item 1</Container>
        <Container>Item 2</Container>
        <Container>Item 3</Container>
        <Container>Item 4</Container>
        <Container>Item 3</Container>
        <Container>Item 4</Container>
        <Container>Item 3</Container>
        <Container>Item 4</Container>
      </div>
    </>
  )
}

export default App
