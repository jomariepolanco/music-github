import React, { Component } from 'react'
import ContributionsContainer from './ContributionsContainer'
import AudioContainer from './AudioContainer'

export default class BodyContainer extends Component {
    render() {
        return (
            <div>
                <AudioContainer />
                <ContributionsContainer />
            </div>
        )
    }
}
