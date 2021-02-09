import React from 'react'

export default class MessageOutput extends React.Component {

    render() {
        return (
            <div>
                <div class="message text-only">
                    <div class="response">
                        <p class="text">{this.props.mess}</p>
                    </div>
                </div>
            </div>
        )
    }

}