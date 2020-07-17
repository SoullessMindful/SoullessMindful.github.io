import React, { FunctionComponent } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavLink } from './components/NavLink'
import { Home } from './components/Home'
import './App.css'

export const App: FunctionComponent = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>soulless MindfuL</h1>
      </header>
      <nav className="App-navigation">
        <NavLink label="Home" path="/" />
        <NavLink label="Projects" path="/projects" />
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
      <main className="App-content">
        <Switch>
          <Route path="/projects"></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <footer className="App-footer">
        Soulless Mindful - Sławomir Kusiński - 2020
      </footer>
    </div>
  </Router>
)
