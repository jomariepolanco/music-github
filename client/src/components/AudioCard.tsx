import { Card, CardContent } from '@material-ui/core'
import React, { Component } from 'react'

interface Props {
    title: string;
    track: string;
}

export default class AudioCard extends Component<Props>{
    // componentDidMount(){
    //     debugger
    //     console.log('hi')
    // }
    render() {
        return (
            <div>
            <Card variant="outlined">
                <CardContent>
                    <h3>{this.props.title}</h3>
                    <audio controls>
                        <source src={this.props.track}/>
                    </audio>
                </CardContent>
            </Card>
            </div>
        )
    }
}
