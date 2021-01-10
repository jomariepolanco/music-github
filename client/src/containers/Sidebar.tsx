import React, { ChangeEvent, Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ThunkDispatch} from 'redux-thunk'
import { Genre } from '../store/genre/models/Genre'
import { AppState } from '../store/rootStore'
import {AppActions} from '../store/models/actions'
import { boundGenres } from '../store/genre/GenreAction'
import { boundProducers } from '../store/producer/ProducerAction'
import GenreCard from '../components/GenreCard'
import ProducerCard from '../components/ProducerCard'
import { List } from '@material-ui/core'
import ProducerSearch from '../components/ProducerSearch'
import GenreSearch from '../components/GenreSearch'
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
        genreInput: "",
        producerInput: ""
    }

    componentDidMount(){
        this.props.boundGenres()
        this.props.boundProducers()
        this.props.boundAudios()
    }

    renderGenres = () => {
        if (this.state.genreInput.length === 0){
            return null
        } else {
            const filterGenres = [...this.props.genres].filter(genre => genre.name.toLowerCase().includes(this.state.genreInput.toLowerCase()))
            return filterGenres.map(genre => <GenreCard key={genre.id} name={genre.name} />)
        }
    }

    renderProducers = () => {
        if (this.state.producerInput.length === 0) {
            return null
        } else {
            const filterProducers = [...this.props.producers].filter(producer => producer.name.toLowerCase().includes(this.state.producerInput.toLowerCase()) || producer.username.toLowerCase().includes(this.state.producerInput.toLowerCase()))
            return filterProducers.map(producer => <ProducerCard key={producer.id} name={producer.name} username={producer.username} />)
        }

    }

    renderAudios = () => {
        return [...this.props.audios].map(audio => <><div id={audio.title} onClick={this.renderAudioCard}key={audio.id}>{audio.title}</div><br/><br/></>)
    }

    renderAudioCard = (e: any) => {
        const audio = [...this.props.audios].find(audio => audio.title === e.target.id)
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(): JSX.Element{
        return (
            <aside>
                <GenreSearch genreInput={this.state.genreInput} genres={this.props.genres} genreChangeHandler={this.onChangeHandler} />
                <ProducerSearch producerInput={this.state.producerInput} producers={this.props.producers} producerChangeHandler={this.onChangeHandler}/>
               <List component="nav" style={{ textAlign: 'center'}}>
                    {this.renderGenres()}
                    {this.renderProducers()}
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