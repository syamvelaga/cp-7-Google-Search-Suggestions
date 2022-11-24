import SuggestionItem from '../SuggestionItem'
import './index.css'

function GoogleSuggestions(props) {
  const {suggestionsList} = props
  console.log(suggestionsList)

  return (
    <div>
      <ul>
        {suggestionsList.map(each => (
          <SuggestionItem listItem={each} />
        ))}
      </ul>
    </div>
  )
}

export default GoogleSuggestions
