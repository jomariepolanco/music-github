import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ThunkDispatch} from 'redux-thunk'
import { Genre } from '../store/genre/models/Genre'
import { AppState } from '../store/rootStore'
import {AppActions} from '../store/models/actions'
import { boundGenres } from '../store/genre/GenreAction'
import GenreCard from '../components/GenreCard'
import { List } from '@material-ui/core'
import ProducerSearch from '../components/ProducerSearch'
import GenreSearch from '../components/GenreSearch'



interface Props {}

interface LinkStateProps {
    genres: Genre[]
}

interface LinkDispatchProps {
    boundGenres: () => void;
}

type LinkProps = LinkStateProps & LinkDispatchProps & Props

class Sidebar extends Component<LinkProps>{

    componentDidMount(){
        this.props.boundGenres()
    }

    renderGenres = () => {
        return [...this.props.genres].map(genre => <GenreCard key={genre.id} name={genre.name} />)
    }
    render(): JSX.Element{
        return (
            <aside>
                <GenreSearch />
                <ProducerSearch />
               <List component="nav" style={{maxWidth: '15%'}}>
                    {this.renderGenres()}

               </List>

               
            </aside>
        )
    }
}

const msp = (state: AppState): LinkStateProps => ({
    genres: state.genreReducer.genres
})

const mdp = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    boundGenres: bindActionCreators(boundGenres, dispatch)
})
export default connect(msp, mdp)(Sidebar)