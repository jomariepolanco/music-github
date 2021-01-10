import React, { Component } from 'react'
import {ListItem} from '@material-ui/core'

interface Props {
    username: string;
    name: string;
}

export default class ProducerCard extends Component<Props>{
    render() {
        return (
            <div>
                <ListItem button style={{width: '100%', height: '400', maxWidth: '300'}}>
                    {this.props.name}
                </ListItem>
            </div>
        )
    }
}
