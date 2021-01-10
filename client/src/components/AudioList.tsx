import React, { Component } from 'react'
import {ListItem} from '@material-ui/core'
import { connect } from 'react-redux'
import { AppState } from '../store/rootStore'
import { Audio } from '../store/audio/models/Audio'
import { AppActions } from '../store/models/actions'
import {boundOneAudio} from '../store/audio/AudioAction'
import {bindActionCreators} from 'redux'
import { ThunkDispatch } from 'redux-thunk'

interface Props {
    title: string;
    id: number;
}

interface LinkStateProps {
    audios: Audio[];
    audio: object;
}

interface LinkDispatchProps {
    boundOneAudio: (id: number) => void;
}

type LinkProps = LinkStateProps & LinkDispatchProps & Props

class AudioList extends Component<LinkProps>{

    clickHandler = () => {
        this.props.boundOneAudio(this.props.id)
    }

    render() {
        return (
            <div>
                <ListItem button style={{width: '100%', height: '400', maxWidth: '300'}} onClick={this.clickHandler}>
                    {this.props.title}
                </ListItem>
            </div>
        )
    }
}

const msp = (state: AppState): LinkStateProps => ({
    audios: state.audioReducer.audios,
    audio: state.oneAudioReducer.audio
})

const mdp = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    boundOneAudio: bindActionCreators(boundOneAudio, dispatch)
})

export default connect(msp, mdp)(AudioList);