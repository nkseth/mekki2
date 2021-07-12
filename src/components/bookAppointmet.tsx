import React from 'react';
import { Box } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';
import Link from 'next/link'
import Calender from "../asserts/calender.png"


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {


            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'


        },

        Links: {
            color: 'white',
            fontSize: "1rem",
            fontWeight: 700,
            transition: '0.3s ease-out',
            '&:active , &:visited,&:hover': {
                borderBottom: '2px solid white',
                cursor: 'pointer'

            }

        },
        appointment: {
            display: 'flex',
            alignItems: 'center',
            color: "#4572D1",
            justifyContent: 'center',
            backgroundColor: '#DEDEDE',
            borderRadius: '.5rem',
            cursor: 'pointer'

        },
        calendericon: {
            width: 35,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 35,


        },
        cpad: {
            borderRadius: "0.5rem 0 0 0.5rem",
            padding: theme.spacing(1),
            backgroundColor: "#01246D"
        },
        gpad: {
            padding: theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },

    }),
);

const BookAppointment: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box p={2} >
                <Link href="/appointment">
                    <Box className={classes.appointment}>
                        <Box className={classes.cpad} >
                            <img className={classes.calendericon} src={Calender} />
                        </Box>
                        <Box className={classes.gpad}>
                            Get Appointment
                            <ChevronRightSharpIcon />
                        </Box>
                    </Box>
                </Link>
            </Box>

        </div>
    );
}
export default BookAppointment