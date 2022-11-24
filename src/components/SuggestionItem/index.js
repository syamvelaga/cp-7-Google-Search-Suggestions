// Write your code here
import './index.css'

function SuggestionItem(props) {
  const {listItem} = props
  const {suggestion} = listItem

  return (
    <li>
      <p>{suggestion}</p>

      <img
        className="arrow"
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
