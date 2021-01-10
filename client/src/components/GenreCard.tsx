import { ListItem } from '@material-ui/core'
import React, { Component } from 'react'

interface Props {
    name: string;
}
export default class GenreCard extends Component<Props>{
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
