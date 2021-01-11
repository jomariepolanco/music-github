import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography, IconButton, Button } from '@material-ui/core'
import AlbumRoundedIcon from '@material-ui/icons/AlbumRounded'
import React from 'react'
import {NavLink} from 'react-router-dom'

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

type NavbarComponent = React.FC

const Navbar: NavbarComponent = () => {
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
                    <Button href='/login' color="inherit">Login</Button>
                    <Button color="inherit">Signup</Button>
                </Toolbar>
            </AppBar>
        </nav>
    )

}

export default Navbar;