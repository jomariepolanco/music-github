import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import ContributionCard from '../components/ContributionCard'

export default class ContributionsContainer extends Component {
    render() {
        return (
            <Container fixed>
                <ContributionCard />
            </Container>
        )
    }
}
