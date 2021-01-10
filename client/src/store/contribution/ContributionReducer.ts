import { GET_CONTRIBUTIONS_FAILURE, GET_CONTRIBUTIONS_REQUEST, GET_CONTRIBUTIONS_SUCCESS, ContributionActionTypes } from "./models/actions";
import { Contribution } from "./models/Contribution";

interface ContributionState {
    load: boolean;
    contributions: Contribution[];
    err: string;
}

const defaultState: ContributionState = {
    load: false,
    contributions: [],
    err: ''
}

export const contributionReducer = (state = defaultState, action: ContributionActionTypes): ContributionState => {
    switch(action.type){
        case GET_CONTRIBUTIONS_REQUEST:
            return {load: true, contributions: [], err: ''}
        case GET_CONTRIBUTIONS_SUCCESS:
            return {load: false, contributions: action.contributions, err: ''}
        case GET_CONTRIBUTIONS_FAILURE:
            return {load: false, contributions: [],err: action.err}
        default:
            return state
    }
}