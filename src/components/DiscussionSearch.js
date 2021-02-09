import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default class DiscusstionSearch extends React.Component {

    render() {
        return (
            <div class="discussion search">
                <div class="searchbar">
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type="text" placeholder="Search..."></input>
                </div>
            </div>
        )
    }

}