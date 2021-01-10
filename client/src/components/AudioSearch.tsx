import React, { ChangeEvent, Component } from 'react'
import { Genre } from '../store/genre/models/Genre'

interface Props {
    genres: Genre[];
    genreInput: string;
    genreChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

class AudioSearch extends Component<Props>{

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="search tracks" name="searchInput" value={this.props.searchInput} onChange={this.props.onChangeHandler}/>
                </form>
            </div>
        )
    }
}

export default AudioSearch
