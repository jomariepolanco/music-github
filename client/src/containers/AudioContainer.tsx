import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import AudioCard from '../components/AudioCard'

export default class AudioContainer extends Component {
    render() {
        return (
            <Container fixed>
                <AudioCard />
            </Container>
        )
    }
}
