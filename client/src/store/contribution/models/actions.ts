import { Contribution } from "./Contribution"

export const GET_CONTRIBUTIONS_REQUEST = 'GET_CONTRIBUTIONS'
export const GET_CONTRIBUTIONS_SUCCESS = 'GET_CONTRIBUTIONS_SUCCESS'
export const GET_CONTRIBUTIONS_FAILURE = 'GET_CONTRIBUTIONS_FAILURE'

interface ContributionAsync {
    load: boolean;
    contributions: Contribution[];
    err: string;
}

interface GetContributionsRequest extends ContributionAsync {
    type: typeof GET_CONTRIBUTIONS_REQUEST
}
interface GetContributionsSuccess extends ContributionAsync {
    type: typeof GET_CONTRIBUTIONS_SUCCESS
}
interface GetContributionsFailure extends ContributionAsync {
    type: typeof GET_CONTRIBUTIONS_FAILURE
}

export type ContributionActionTypes = GetContributionsFailure | GetContributionsSuccess | GetContributionsRequest
