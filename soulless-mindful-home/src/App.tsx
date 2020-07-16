import React, { ReactElement } from 'react'
import { NavLink } from './components/NavLink'
import './App.css'

export const App = (): ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>soulless MindfuL</h1>
      </header>
      <nav className="App-navigation">
        <NavLink label="Skills" path="" />
        <NavLink label="Projects" path="my-skills" />
        <NavLink
          label="Github"
          path="https://github.com/SoullessMindful"
          outside={true}
        />
        <NavLink
          label="LinkedIn"
          path="https://www.linkedin.com/in/s%C5%82awomir-kusi%C5%84ski-2401031a8/"
          outside={true}
        />
      </nav>
      <main className="App-content"></main>
      <div className="App-footer App-footer-shadow">A</div>
      <footer className="App-footer App-footer-bottom">
        Soulless Mindful - Sławomir Kusiński - 2020
      </footer>
    </div>
  )
}
