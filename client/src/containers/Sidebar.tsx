import React, { ChangeEvent, Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ThunkDispatch} from 'redux-thunk'
import { AppState } from '../store/rootStore'
import {AppActions} from '../store/models/actions'
import AudioList from '../components/AudioList'
import { List } from '@material-ui/core'
import AudioSearch from '../components/AudioSearch'
import { boundAudios } from '../store/audio/AudioAction'
import { Audio } from '../store/audio/models/Audio'



interface Props {}

interface LinkStateProps {
    audios: Audio[];
}

interface LinkDispatchProps {
    boundAudios: () => void;
}

type LinkProps = LinkStateProps & LinkDispatchProps & Props

class Sidebar extends Component<LinkProps>{

    state = {
        searchInput: ""
    }

    componentDidMount(){
        this.props.boundAudios()
    }

    renderAudios = () => {
        const filteredAudioList = [...this.props.audios].filter(audio => audio.title.toLowerCase().includes(this.state.searchInput.toLowerCase()))
        return filteredAudioList.map(audio => <AudioList key={audio.id} title={audio.title} id={audio.id} />)
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(): JSX.Element{
        return (
            <aside>
                <AudioSearch searchInput={this.state.searchInput} changeHandler={this.onChangeHandler} />
               <List component="nav" style={{ textAlign: 'center'}}>
                    {this.renderAudios()}
               </List>

               
            </aside>
        )
    }
}

const msp = (state: AppState): LinkStateProps => ({
    audios: state.audioReducer.audios
})

const mdp = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    boundAudios: bindActionCreators(boundAudios, dispatch)
})
export default connect(msp, mdp)(Sidebar)