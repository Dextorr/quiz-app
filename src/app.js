import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Quiz from './components/Quiz'
import Home from './components/Home'

import './style.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/quiz" component={Quiz} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)


// <header>
//   <Link to="/">
//     <h1>Quiz App</h1>
//   </Link>
//   <nav>
//     <Link to="/register">Register</Link>
//     <Link to="/login">Login</Link>
//   </nav>
// </header>
