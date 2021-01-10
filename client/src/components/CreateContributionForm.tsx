import { Button, DialogActions, DialogContentText, DialogTitle } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import React, { ChangeEvent } from 'react'

export default function CreateContributionForm() {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = (e: any) => {
        debugger
        console.log(e)
        fetch('api/contributions/', {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({

            })
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
                        <TextField margin="dense" name="comment" label="Description" type="text" fullWidth />

                        <TextField margin="dense" name="audio" label="MP3 File" type="text" fullWidth/>

                </DialogContent>
                <DialogActions>
                    <Button type="submit" color="primary">
                        Submit
                    </Button>
                </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}
