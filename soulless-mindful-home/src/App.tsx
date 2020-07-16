import React, { ReactElement } from 'react'
import './App.css'

export const App = (): ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>soulless MindfuL</h1>
      </header>
      <nav className="App-navigation">
        <div>My Skills</div>
        <div>My Projects</div>
        <div>My Repo</div>
        <div>My Linkedin</div>
      </nav>
      <main className="App-content"></main>
      <div className="App-footer App-footer-shadow">A</div>
      <footer className="App-footer App-footer-bottom">
        Soulless Mindful - Sławomir Kusiński - 2020
      </footer>
    </div>
  )
}
