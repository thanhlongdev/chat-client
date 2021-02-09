import React from 'react'
import FooterChat from './FooterChat'
import HeaderChat from './HeaderChat'
import MessageChat from './MessageChat'

export default class SectionChat extends React.Component {

    sendMessage = (message) => {
        this.props.sendMessage(message);
    }

    render() {

        return (
            <section className='chat'>
                <HeaderChat />
                <MessageChat message={this.props.messages} user={this.props.user} />
                <FooterChat sendMessage={this.sendMessage} />
            </section>
        )

    }

}