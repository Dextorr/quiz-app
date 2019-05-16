import React, { Component } from 'react'


class Quiz extends Component {
  state={
    answers: [],
    newAnswer: {}
  }


  handleChange = ({ target: { name, value }}) => {
    console.log(value, 'value on change')
    const { newAnswer } = this.state
    this.setState({ newAnswer: {...newAnswer, [name]: value }})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { answers, newAnswer } = this.state
    this.setState({ answers: [...answers, newAnswer]})
  }


  render(){
    console.log(this.state, 'I AM STATE')
    return (
      <div>
        <h2> Girls Day Quiz</h2>
        <div className="questions">
          <h3>Question 1</h3>
          <p>Who said this?</p>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
            placeholder="Answers here.."
            type="text"
            name="answer"
            onChange={this.handleChange}
            className="answers-input"
            />
            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    )
  }
}

export default Quiz
