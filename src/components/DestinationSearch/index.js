import {Component} from 'react'

import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {search: ''}

  onChange = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {search} = this.state
    const {destinationsList} = this.props

    const filteredList = destinationsList.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div className="page">
        <h1>Destination Search</h1>
        <div className="search">
          <input
            placeholder="search"
            value={search}
            type="search"
            onChange={this.onChange}
          />
          <img
            className="search_icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        {filteredList.length > 0 ? (
          <ul className="ul_user_profiles_container">
            {filteredList.map(eachObj => (
              <DestinationItem key={eachObj.id} details={eachObj} />
            ))}
          </ul>
        ) : (
          <h1 className="result_not_found">Result Not Found</h1>
        )}
      </div>
    )
  }
}

export default DestinationSearch
