import React from 'react'

export default class MessageInput extends React.Component {

    render() {
        return (
            <div>
                <div class="message">
                    <div class="photo">
                        <div class="online"></div>
                    </div>
                    <p class="text">{this.props.mess}</p>
                </div>
            </div>
        )
    }

}