import { Card, CardContent, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Audio } from '../store/audio/models/Audio'
import { AppState } from '../store/rootStore'

interface Props {}

interface LinkStateProps {
    audio: any;
}

type LinkProps = LinkStateProps & Props

// const styles = {
   
//     details: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     cover: {
//       width: 151,
//     },
//     controls: {
//       display: 'flex',
//       alignItems: 'center',
//       paddingLeft: theme.spacing(1),
//       paddingBottom: theme.spacing(1),
//     },
//     playIcon: {
//       height: 38,
//       width: 38,
//     },
//   }


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
                        <audio controls preload="auto">
                            <source src={this.props.audio.track}/>
                        </audio>
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
