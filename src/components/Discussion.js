import React from 'react'

export default class Discusstion extends React.Component {


    render() {

        let props = this.props;

        return (
            <div className={props.active === true ? 'discussion message-active' : 'discussion'}>
                <div class="photo">
                    <div class="online"></div>
                </div>
                <div class="desc-contact">
                    <p class="name">Megan Leib</p>
                    <p class="message">9 pm at the bar if possible 😳</p>
                </div>
                <div class="timer">12 sec</div>
            </div>
        )

    }

}