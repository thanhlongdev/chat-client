import { faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class FooterChat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    sendMessage = () => {
        this.props.sendMessage(this.state.message);
    }

    changeText = (event) => {

        if (event.keyCode === 13) {
            this.sendMessage();
        } else {
            this.setState({
                message: event.target.value
            })
        }
    }

    render() {
        return (
            <div class="footer-chat">
                <FontAwesomeIcon icon={faSmile} fontSize={'25pt'} />
                <input type="text"
                    class="write-message"
                    placeholder="Type your message here"
                    onChange={e => this.changeText(e)}>
                </input>
                <Button style={{ width: '50px' }} className='ml-2' onClick={() => this.sendMessage()}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </Button>
            </div>
        );
    }
}

export default FooterChat;