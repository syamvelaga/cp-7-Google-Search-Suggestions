import {Component} from 'react'

import GoogleSuggestions from './components/GoogleSuggestions'

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]
// const App = () => <GoogleSuggestions suggestionsList={suggestionsList} />

class App extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="main-bg">
          <div>
            <img
              alt="google logo"
              className="google"
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            />
          </div>
          <div className="input-bg">
            <div className="input-bg-inner">
              <img
                alt="search icon"
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                size="70"
                type="search"
                name="name"
                placeholder="Search Google"
              />
            </div>

            <GoogleSuggestions suggestionsList={suggestionsList} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
