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



interface Props {}

interface LinkStateProps {
    genres: Genre[],
    producers: Producer[];
}

interface LinkDispatchProps {
    boundGenres: () => void;
    boundProducers: () => void;
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
    }

    renderGenres = () => {
        // if (this.state.genreInput.length === 0){
        //     return "Search by genre or producer"
        // } else {
            const filterGenres = [...this.props.genres].filter(genre => genre.name.toLowerCase().includes(this.state.genreInput.toLowerCase()))
            return filterGenres.map(genre => <GenreCard key={genre.id} name={genre.name} />)
        // }
    }

    renderProducers = () => {
        const filterProducers = [...this.props.producers].filter(producer => producer.name.toLowerCase().includes(this.state.producerInput.toLowerCase()) || producer.username.toLowerCase().includes(this.state.producerInput.toLowerCase()))
        return filterProducers.map(producer => <ProducerCard key={producer.id} name={producer.name} username={producer.username} />)

    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(): JSX.Element{
        return (
            <aside>
                <GenreSearch genreInput={this.state.genreInput} genres={this.props.genres} genreChangeHandler={this.onChangeHandler} />
                <ProducerSearch producerInput={this.state.producerInput} producers={this.props.producers} producerChangeHandler={this.onChangeHandler}/>
               <List component="nav" style={{maxWidth: '15%'}}>
                    {this.renderGenres()}
                    {this.renderProducers()}

               </List>

               
            </aside>
        )
    }
}

const msp = (state: AppState): LinkStateProps => ({
    genres: state.genreReducer.genres,
    producers: state.producerReducer.producers
})

const mdp = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    boundGenres: bindActionCreators(boundGenres, dispatch),
    boundProducers: bindActionCreators(boundProducers, dispatch)
})
export default connect(msp, mdp)(Sidebar)