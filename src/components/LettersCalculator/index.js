import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    inputLetter: '',
    letterCount: 0,
  }
  onCountLetter =() => {
      const {inputletter, letterCount} = this.state
      letterCount !== '' ? =>{

        
      }
      inputletter !== '' ? inputletter.count() prevState
      })
  }

deleteUser = uniqueNo => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.uniqueNo !== uniqueNo
    )
    this.setState({
      usersDetailsList: filteredUsersData
    })
  }

  render() {
    const {inputletter, letterCount} = this.state

    return (
      <div className="count-container">
        <div className="img-text-container">
          <div className="upper-container">
            <h1 className="h1"> Calculate the Letters you enter </h1>
            <label className="p"> Enter the phrase </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              value={letterCount}
            />
            <p className="button"> No.of letters: {letterCount} </p>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
