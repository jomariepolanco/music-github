import { Card, CardContent } from '@material-ui/core'
import React, { Component } from 'react'

interface Props {
    comment: string;
    track: string;
    isAccepted: boolean;
    date: Date;
}

export default class ContributionCard extends Component<Props>{
    render() {
        return (
            <div>
                <Card variant="outlined">
                    <CardContent>
                        <h6>{this.props.date}</h6>
                        <audio controls>
                            <source src={this.props.track}/>    
                        </audio>
                        <p>{this.props.comment}</p>
                        <button>Accept</button>
                        <button>Deny</button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
