import React, { Component } from 'react'
import {ListItem} from '@material-ui/core'

interface Props {
    title: string;
}

export default class AudioList extends Component<Props>{
    render() {
        return (
            <div>
                <ListItem button style={{width: '100%', height: '400', maxWidth: '300'}}>
                    {this.props.title}
                </ListItem>
            </div>
        )
    }
}
