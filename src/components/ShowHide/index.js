// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {name1: false, name2: false}

  onchangeInput1 = () => {
    this.setState(prevState => ({name1: !prevState.name1}))
  }

  onchangeInput2 = () => {
    this.setState(prevState => ({name2: !prevState.name2}))
  }

  render() {
    const {name1, name2} = this.state
    const classNamePara1 = name1 ? 'Joe' : ''
    const classNamePara2 = name2 ? 'Jonas' : ''

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="main-container">
          <div className="card-container">
            <button
              type="button"
              className="btn-1"
              onClick={this.onchangeInput1}
            >
              Show/Hide FirstName
            </button>
            <p className="show">{classNamePara1}</p>
          </div>
          <div className="card-container">
            <button
              type="button"
              className="button"
              onClick={this.onchangeInput2}
            >
              Show/Hide LastName
            </button>
            <p className="show">{classNamePara2}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
