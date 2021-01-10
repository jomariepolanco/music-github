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
}

interface LinkDispatchProps {
    boundAudios: () => void;
}

type LinkProps = LinkStateProps & LinkDispatchProps & Props

class AudioContainer extends Component<LinkProps>{

    componentDidMount(){
        this.props.boundAudios()
    }

    renderAudios = () => {
        return [...this.props.audios].map(audio => <AudioCard key={audio.id} title={audio.title} track={audio.track} />)
    }

    
    render() {
        return (
            <Container fixed>
                {this.renderAudios()}
            </Container>
        )
    }
}

const msp = (state: AppState): LinkStateProps => ({
    audios: state.audioReducer.audios
})

const mdp = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    boundAudios: bindActionCreators(boundAudios, dispatch)
})

export default connect(msp, mdp)(AudioContainer);
