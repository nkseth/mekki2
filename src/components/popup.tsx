import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'fixed',
            maxWidth: 400,
            width: '70vw',

            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            left: 20,
            bottom: 20,
            zIndex: 100,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderRadius: '20px',
            background: 'black',
            color: 'white'
        },
        action: {
            display: "flex",
            color: 'white',

        },
        button: {
            color: "white",
            "&:hover": {
                color: 'red'
            }
        }
    }),
);
interface Props {
    open: boolean,
    close: () => void
}

const SimpleModal: React.FC<Props> = (props) => {
    const close = () => {
        props.close()
    }
    const classes = useStyles()
    return (
        <div className={classes.paper} style={{ display: props.open ? "flex" : "none" }}>
            <div>Want somecookies get some</div>
            <div className={classes.action}>

                <Button className={classes.button} onClick={close}>ALLOW</Button>
                <Button className={classes.button} onClick={close}>CANCEL</Button>
            </div>
        </div>
    )


}
export default SimpleModal