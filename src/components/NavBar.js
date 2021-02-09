import { faCog, faComment, faFile, faHome, faPencilAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Navbar } from 'react-bootstrap'

export default class NavBar extends React.Component {

    render() {
        return (
            <Navbar className={'menu'}>
                <ul class="items">
                    <li class="item">
                        <FontAwesomeIcon icon={faHome} />
                    </li>
                    <li class="item">
                        <FontAwesomeIcon icon={faUser} />
                    </li>
                    <li class="item">
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </li>
                    <li class="item item-active">
                        <FontAwesomeIcon icon={faComment} />
                    </li>
                    <li class="item">
                        <FontAwesomeIcon icon={faFile} />
                    </li>
                    <li class="item">
                        <FontAwesomeIcon icon={faCog} />
                    </li>
                </ul>
            </Navbar>
        )
    }

}