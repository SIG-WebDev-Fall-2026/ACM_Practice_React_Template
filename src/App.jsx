import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Container from './Container.jsx'
import './App.css'
import Person1 from './Person_1/Component.jsx'
import Person2 from './Person_2/Component.jsx'
import Person3 from './Person_3/Component.jsx'
import Person4 from './Person_4/Component.jsx'
import Person5 from './Person_5/Component.jsx'
import Person6 from './Person_6/Component.jsx'
import Person7 from './Person_7/Component.jsx'
import Person8 from './Person_8/Component.jsx'
import Person9 from './Person_9/Component.jsx'

function App() {
  return (
    <>
      <h1 className='title'>Tell us about yourself</h1>
      <div className='grid-container'>
        <Container>
          <Person1/>
        </Container>
        <Container>
          <Person2/>
        </Container>
        <Container>
          <Person3/>
        </Container>
        <Container>
          <Person4/>
        </Container>
        <Container>
          <Person5/>
        </Container>
        <Container>
          <Person6/>
        </Container>
        <Container>
          <Person7/>
        </Container>
        <Container>
          <Person8/>
        </Container>
        <Container>
          <Person9/>
        </Container>
      </div>
    </>
  )
}

export default App
