import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import ContributionCard from '../components/ContributionCard'
import CreateContributionForm from '../components/CreateContributionForm'
import { boundContributions } from '../store/contribution/ContributionAction'
import { Contribution } from '../store/contribution/models/Contribution'
import { AppActions } from '../store/models/actions'
import { AppState } from '../store/rootStore'

interface Props {}

interface LinkStateProps {
    contributions: Contribution[]
    audio: any;
}

interface LinkDispatchProps {
    boundContributions: () => void;
}

type LinkProps = LinkStateProps & LinkDispatchProps & Props

class ContributionsContainer extends Component<LinkProps>{


    renderContributions = () => {
        const contributions = [...this.props.contributions].filter(contribution => contribution.audio.id === this.props.audio.id)
        return contributions.map(c => <ContributionCard key={c.id} comment={c.comment} track={c.track} isAccepted={c.isAccepted} date={c.date}/>)
    }
    render() {
        return (
            <Container fixed>
                {this.renderContributions()}
                <CreateContributionForm />
                
            </Container>
        )
    }
}

const msp = (state: AppState): LinkStateProps => ({
    contributions: state.contributionReducer.contributions,
    audio: state.oneAudioReducer.audio
})

const mdp = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    boundContributions: bindActionCreators(boundContributions, dispatch)
})

export default connect(msp, mdp)(ContributionsContainer)
