import { Card, CardContent, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Audio } from '../store/audio/models/Audio'
import { AppState } from '../store/rootStore'
import ReactAudioPlayer from 'react-audio-player'

interface Props {}

interface LinkStateProps {
    audio: any;
}

type LinkProps = LinkStateProps & Props

class AudioCard extends Component<LinkProps>{
    render() {
        return (
            <div>
            <Card variant="outlined" style={{display: "flex"}}>
                <CardContent style={{flex: '1 0 auto'}}>
                    <Typography component="h3">
                        {this.props.audio.title}
                    </Typography>
                    <br/>
                    <div>
                        <ReactAudioPlayer src={this.props.audio.track} controls autoPlay/>
                        
                    </div>
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
