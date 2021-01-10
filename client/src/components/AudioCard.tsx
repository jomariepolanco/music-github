import { Card, CardContent } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Audio } from '../store/audio/models/Audio'
import { AppState } from '../store/rootStore'

interface Props {}

interface LinkStateProps {
    audio: any;
}

type LinkProps = LinkStateProps & Props

class AudioCard extends Component<LinkProps>{
    
    render() {
        console.log(this.props.audio)
        return (
            <div>
            <Card variant="outlined">
                <CardContent>
                    <h3>{this.props.audio.title}</h3>
                    <audio controls>
                        <source src={this.props.audio.track}/>
                    </audio>
                </CardContent>
            </Card>
            </div>
        )
    }
}

const msp = (state: AppState): LinkStateProps => ({
    audio: state.oneAudioReducer.audio
})

export default connect(msp)(AudioCard);
