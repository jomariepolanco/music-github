import { Dispatch } from "react";
import { AppActions } from "../models/actions";
import { GET_CONTRIBUTIONS_FAILURE, GET_CONTRIBUTIONS_REQUEST, GET_CONTRIBUTIONS_SUCCESS } from "./models/actions";
import { Contribution } from "./models/Contribution";

const requestContributions = (): AppActions => ({
    type: GET_CONTRIBUTIONS_REQUEST,
    load: true,
    contributions: [],
    err: ''
})

const setContributions = (contributions: Contribution[]): AppActions => ({
    type: GET_CONTRIBUTIONS_SUCCESS,
    load: false,
    contributions: contributions,
    err: ''
})

const invalidContributions = (): AppActions => ({
    type: GET_CONTRIBUTIONS_FAILURE,
    load: false,
    contributions: [],
    err: 'Unable to fetch contributions'
})

export const boundContributions = () => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(requestContributions())
        return fetch('api/contributions')
        .then(r => r.json())
        .then(contributions => dispatch(setContributions(contributions)))
    }
}
