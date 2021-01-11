import { Button, Card, CardContent } from '@material-ui/core'
import React, { Component } from 'react'

interface Props {
    comment: string;
    track: string;
    isAccepted: boolean;
    date: Date;
    id: number;
    deleteHandler: (id: number) => void;
}

export default class ContributionCard extends Component<Props>{

    deleteClickHandler = () => {
        this.props.deleteHandler(this.props.id)
    }
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
                        <Button onClick={this.deleteClickHandler} variant="contained" color="primary">Delete</Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
