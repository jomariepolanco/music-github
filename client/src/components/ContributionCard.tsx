import { Button, Card, CardContent } from '@material-ui/core'
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
                        <Button variant="contained" color="primary">Accept</Button>
                        <Button variant="contained" color="secondary" >Deny</Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
