import React, { useContext } from 'react'
import { Typography, Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { SocketContext } from '../SocketContext';
import './styles.css';

const font = "'Comfortaa', cursive"


const Notifications = () => {
    
    const isTabletOrMobile = useMediaQuery('(max-width:600px)')

    const type = isTabletOrMobile?"h6":"h4"

    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Typography variant={type} style={{fontFamily: font}}>{call.name} is calling: &emsp;</Typography>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Answer
                    </Button>
                </div>
            )}
        </>
    )
}

export default Notifications
