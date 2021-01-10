import React, { Component } from 'react'
import { Genre } from '../store/genre/models/Genre'

interface Props {
    genres: Genre[];
    genreInput: string;
    genreChangeHandler: (e: any) => void;
}

class GenreSearch extends Component<Props>{


    onChangeHandler = (e: any) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="genre search" name="genreInput" value={this.props.genreInput} onChange={this.props.genreChangeHandler}/>
                </form>
            </div>
        )
    }
}

export default GenreSearch
