import React, { useContext } from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import './styles.css'
import { SocketContext } from '../SocketContext';

const font = "'Comfortaa', cursive"

const useStyles = makeStyles((theme) => ({
    video: {
      width: '550px',
      [theme.breakpoints.down('xs')]: {
        width: '300px',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
      padding: '10px',
      borderRadius: '15px',
      margin: '10px',
    },
}));

const VideoPlayer = () => {

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();

    return (
        <Grid container className={classes.gridContainer}>
            {/* Our own video */}
            {stream && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom style={{fontFamily: font, letterSpacing: '0em'}}>{ name || 'Name' }</Typography>
                        <video playsInline muted ref={myVideo} autoPlay className={classes.video} style={{borderRadius: '15px'}} />
                    </Grid>
                </Paper>
            )}
            {/* User's video */}
            {callAccepted && !callEnded && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom style={{fontFamily: font, letterSpacing: '0em'}}>{ call.name || 'Name' }</Typography>
                        <video playsInline ref={userVideo} autoPlay className={classes.video} style={{borderRadius: '15px'}} />
                    </Grid>
                </Paper>
            )}
        </Grid>
    )
}

export default VideoPlayer
