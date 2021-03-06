import { Button, DialogActions, DialogContentText, DialogTitle } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { boundContributions } from '../store/contribution/ContributionAction'
import { AppActions } from '../store/models/actions'
import { AppState } from '../store/rootStore'

interface Props {}

interface LinkStateProps {
    audio: any;
}

interface LinkDispatchProps {
    boundContributions: () => void;
}

type LinkProps = LinkStateProps & LinkDispatchProps & Props 

type FormComponent = React.FC<LinkProps>

const CreateContributionForm: FormComponent = ({audio, boundContributions}) => {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const comment = e.target.comment.value
        const track = e.target.audio.value
        console.log('before fetch', comment, track) 
        fetch('api/contributions/', {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                comment: comment,
                track: track,
                audioId: audio.id,
                isAccepted: false,
                date: new Date()
            })
        })
        .then(r => r.json())
        .then(newContribution => {
            boundContributions()
        })
    }

    return (
        <div>
           <Button variant="outlined" color="primary" onClick={handleClickOpen}>
               Add Contribution
           </Button>
           <Dialog open={open} onClose={handleClose}aria-labelledby="form-dialog-title">
               <form onSubmit={handleSubmit}>
               <DialogTitle id="form-dialog-title">Add Your Contribution Here</DialogTitle>
                <DialogContent>
                        <DialogContentText>
                            Please fill out every section below. This will be sent to the producer who must approve before the audio can be updated.
                        </DialogContentText>
                        <TextField margin="dense" name="comment" label="Comment" type="text" fullWidth />

                        <TextField margin="dense" name="audio" label="MP3 File" type="text" fullWidth/>

                </DialogContent>
                <DialogActions>
                    <Button type="submit" color="primary" onClick={handleClose}>
                        Submit 
                    </Button>
                </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}

const msp = (state: AppState): LinkStateProps => ({
    audio: state.oneAudioReducer.audio
})

const mdp = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    boundContributions: bindActionCreators(boundContributions, dispatch)
})

export default connect(msp, mdp)(CreateContributionForm);