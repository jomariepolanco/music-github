import React, { ChangeEvent, Component } from 'react'
import { Genre } from '../store/genre/models/Genre'

interface Props {
    // genres: Genre[];
    searchInput: string;
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

class AudioSearch extends Component<Props>{

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="search tracks" name="searchInput" value={this.props.searchInput} onChange={this.props.changeHandler}/>
                </form>
            </div>
        )
    }
}

export default AudioSearch
