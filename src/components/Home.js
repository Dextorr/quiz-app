import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <h1>HOME</h1>
      <div>
        <Link to="/quiz">
          <h3>Start the Quiz</h3>
        </Link>
      </div>
    </main>
  )
}

export default Home
