import './App.css';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './Components/VideoPlayer';
import Options from './Components/Options';
import Notifications from './Components/Notifications'

const font = "'Comfortaa', cursive"

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    padding: '10px',
    // border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h3" align="center" style={{fontFamily: font, letterSpacing: '0em', fontWeight: 'bolder'}}>Video Chat App</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
