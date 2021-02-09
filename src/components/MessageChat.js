import React from 'react';
import MessageInput from './MessageInput';
import MessageOutput from './MessageOutput';

export default class MessageChat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    generateMessage = (messages) => {

        let eles = messages.map((message, index) => {
            if (message.userId === this.props.user) {
                return <MessageOutput key={index} mess={message.message}/>
            } else {
                return <MessageInput key={index} mess={message.message}/>
            }
        })

        return eles;
    }

    render() {

        const {message} = this.props;

        return (
            <div class="messages-chat">
                {
                    this.generateMessage(message)
                }
            </div>
        );
    }
}