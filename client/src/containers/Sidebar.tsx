import React, { ChangeEvent, Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ThunkDispatch} from 'redux-thunk'
import { Genre } from '../store/genre/models/Genre'
import { AppState } from '../store/rootStore'
import {AppActions} from '../store/models/actions'
import { boundGenres } from '../store/genre/GenreAction'
import { boundProducers } from '../store/producer/ProducerAction'
import AudioList from '../components/AudioList'
import { List } from '@material-ui/core'
import AudioSearch from '../components/AudioSearch'
import { Producer } from '../store/producer/models/Producer'
import { boundAudios } from '../store/audio/AudioAction'
import { Audio } from '../store/audio/models/Audio'



interface Props {}

interface LinkStateProps {
    genres: Genre[],
    producers: Producer[];
    audios: Audio[];
}

interface LinkDispatchProps {
    boundGenres: () => void;
    boundProducers: () => void;
    boundAudios: () => void;
}

type LinkProps = LinkStateProps & LinkDispatchProps & Props

class Sidebar extends Component<LinkProps>{

    state = {
        searchInput: ""
    }

    componentDidMount(){
        this.props.boundGenres()
        this.props.boundProducers()
        this.props.boundAudios()
    }

    renderAudios = () => {
        return [...this.props.audios].map(audio => <AudioList key={audio.id} title={audio.title}/>)
    }

    renderAudio = (e: any) => {
        const audio = [...this.props.audios].find(audio => audio.title === e.target.id)
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(): JSX.Element{
        return (
            <aside>
                <AudioSearch genreInput={this.state.searchInput} genres={this.props.genres} changeHandler={this.onChangeHandler} />
               <List component="nav" style={{ textAlign: 'center'}}>
                    {this.renderAudios()}
               </List>

               
            </aside>
        )
    }
}

const msp = (state: AppState): LinkStateProps => ({
    genres: state.genreReducer.genres,
    producers: state.producerReducer.producers,
    audios: state.audioReducer.audios
})

const mdp = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    boundGenres: bindActionCreators(boundGenres, dispatch),
    boundProducers: bindActionCreators(boundProducers, dispatch),
    boundAudios: bindActionCreators(boundAudios, dispatch)
})
export default connect(msp, mdp)(Sidebar)