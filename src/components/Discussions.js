import React from 'react'
import Discussion from './Discussion'
import DiscussionSearch from './DiscussionSearch'

export default class Discussions extends React.Component {

    render(){
        return (
            <section className = 'discussions'>
                <DiscussionSearch/>
                <Discussion active = {false} />
            </section>
        );
    }

}