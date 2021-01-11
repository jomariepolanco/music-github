import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography, IconButton, Link, Button } from '@material-ui/core'
import AlbumRoundedIcon from '@material-ui/icons/AlbumRounded'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1
        }
    })
)

export default function Navbar() {
    const classes = useStyles()
    return (
        <nav className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <AlbumRoundedIcon />
                    </IconButton>
                    <Typography variant="h5" color="inherit" className={classes.title}>
                        Music Git 
                    </Typography>
                    <Button color="inherit">Contributions</Button>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Signup</Button>
                </Toolbar>
            </AppBar>
        </nav>
    )

}
