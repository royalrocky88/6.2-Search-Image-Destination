// Write your code here

import './index.css'

import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-card-container">
          <input
            type="search"
            placeholder="Search"
            className="search-card"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-img"
            alt="search icon"
          />
        </div>
        <ul className="cards">
          {searchResult.map(eachItem => (
            <DestinationItem
              destinationsListItem={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
