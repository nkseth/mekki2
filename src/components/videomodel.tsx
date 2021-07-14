import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import ReactPlayer from 'react-player'
import { DialogTitle, Button } from '@material-ui/core';

interface Props {
    close: () => void
    open: boolean,
    url: string
}

const AlertDialog: React.FC<Props> = (props) => {



    const handleClose = () => {
        props.close()
    };

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg"
                style={{ padding: 0 }}

            >
                <DialogContent style={{ background: 'black', padding: 0 }}>
                    <DialogTitle>
                        <Button onClick={handleClose} style={{ color: 'white' }}>Close</Button>
                    </DialogTitle>
                    <DialogContentText id="alert-dialog-description">
                        <ReactPlayer url={props.url} />
                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </div>
    );
}
export default AlertDialog
