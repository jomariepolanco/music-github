import React, { Component } from 'react'
import {ListItem} from '@material-ui/core'
import { connect } from 'react-redux'
import { AppState } from '../store/rootStore'
import { Audio } from '../store/audio/models/Audio'

interface Props {
    title: string;
    id: number;
}

interface LinkStateProps {
    audios: Audio[];
}

type LinkProps = LinkStateProps & Props

class AudioList extends Component<LinkProps>{

    clickHandler = () => {
        const audio = [...this.props.audios].find(audio => audio.id === this.props.id)
        console.log(audio)
    }

    render() {
        return (
            <div>
                <ListItem button style={{width: '100%', height: '400', maxWidth: '300'}} onClick={this.clickHandler}>
                    {this.props.title}
                </ListItem>
            </div>
        )
    }
}

const msp = (state: AppState): LinkStateProps => ({
    audios: state.audioReducer.audios
})

export default connect(msp)(AudioList);