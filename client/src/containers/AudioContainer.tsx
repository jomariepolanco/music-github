import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import AudioCard from '../components/AudioCard'
import { boundAudios } from '../store/audio/AudioAction'
import { Audio } from '../store/audio/models/Audio'
import { AppActions } from '../store/models/actions'
import { AppState } from '../store/rootStore'

interface Props {}

interface LinkStateProps {
    audios: Audio[]
    audio: any;
}

interface LinkDispatchProps {
    boundAudios: () => void;
}

type LinkProps = LinkStateProps & LinkDispatchProps & Props

class AudioContainer extends Component<LinkProps>{

    componentDidMount(){
        this.props.boundAudios()
    }

    
    render() {
        return (
            <Container fixed>
                <AudioCard />
            </Container>
        )
    }
}

const msp = (state: AppState): LinkStateProps => ({
    audios: state.audioReducer.audios,
    audio: state.oneAudioReducer.audio
})

const mdp = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    boundAudios: bindActionCreators(boundAudios, dispatch)
})

export default connect(msp, mdp)(AudioContainer);
