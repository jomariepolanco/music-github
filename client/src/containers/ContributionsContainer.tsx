import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import ContributionCard from '../components/ContributionCard'
import { boundContributions } from '../store/contribution/ContributionAction'
import { Contribution } from '../store/contribution/models/Contribution'
import { AppActions } from '../store/models/actions'
import { AppState } from '../store/rootStore'

interface Props {}

interface LinkStateProps {
    contributions: Contribution[]
}

interface LinkDispatchProps {
    boundContributions: () => void;
}

type LinkProps = LinkStateProps & LinkDispatchProps & Props

class ContributionsContainer extends Component<LinkProps>{

    componentDidMount(){
        this.props.boundContributions()
    }


    renderContributions = () => {
        return [...this.props.contributions].map(c => <ContributionCard key={c.id} comment={c.comment} track={c.track} isAccepted={c.isAccepted} date={c.date}/>)
    }
    render() {
        return (
            <Container fixed>
                {this.renderContributions()}
            </Container>
        )
    }
}

const msp = (state: AppState): LinkStateProps => ({
    contributions: state.contributionReducer.contributions
})

const mdp = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    boundContributions: bindActionCreators(boundContributions, dispatch)
})

export default connect(msp, mdp)(ContributionsContainer)
