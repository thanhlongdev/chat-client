import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default class HeaderChat extends React.Component {

    render() {
        return (
            <div class="header-chat">
                <FontAwesomeIcon icon={faUser} className="icon"/>
                <p class="name">Megan Leib</p>
            </div>
        )
    }
}