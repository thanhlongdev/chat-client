import _map from 'lodash/map';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import io from 'socket.io-client';
import Discussions from './components/Discussions';
import NavBar from './components/NavBar';
import SectionChat from './components/SectionChat';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        //Khởi tạo state,
        this.state = {
            messages: [
                { id: 1, userId: 0, message: 'Hello' }
            ],
            user: null,
        }
        this.socket = null;
    }

    //Connetct với server nodejs, thông qua socket.io
    componentDidMount() {

        console.log('Starting connect socket');

        this.socket = io('192.168.1.8:6969');
        this.socket.on('id', res => this.setState({ user: res })) // lắng nghe event có tên 'id'
        this.socket.on('newMessage', (response) => { this.newMessage(response) }); //lắng nghe event 'newMessage' và gọi hàm newMessage khi có event

        console.log('Connect socket success');
    }

    //Khi có tin nhắn mới, sẽ push tin nhắn vào state mesgages, và nó sẽ được render ra màn hình
    newMessage = (m) => {

        const messages = this.state.messages;
        let ids = _map(messages, 'id');
        let max = Math.max(...ids);
        messages.push({
            id: max + 1,
            userId: m.id,
            message: m.data
        });

        this.setState({
            ...this.state,
            messages: messages
        })

    }

    //Gửi event socket newMessage với dữ liệu là nội dung tin nhắn
    sendnewMessage = (m) => {
        this.socket.emit("newMessage", m); //gửi event về server
    }

    render() {
        return (
            <Container>
                <Row>
                    <NavBar />
                    <Discussions />
                    <SectionChat sendMessage={this.sendnewMessage}
                        messages={this.state.messages}
                        user={this.state.user}
                    />
                </Row>
            </Container>
        )
    }
}