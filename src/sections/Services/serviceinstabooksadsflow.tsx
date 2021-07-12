/* eslint-disable prettier/prettier */
import React from 'react';
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Process from '../../components/process'





const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        mainhead: {
            fontSize: '3rem',
            textDecoration: 'underline',
            letterSpacing: '.5rem',
            fontFamily: "Roboto",
            fontWeight: 700,
            padding: '0% 10%',
            transform: "scale(1, 1.5)",
            color: '#162183',
            marginTop: "3rem",
            marginBottom: "5rem",
            [theme.breakpoints.down("sm")]: {
                fontSize: '1.5rem',
                letterSpacing: '1rem',
                marginTop: "1rem"
            }
        },
        superdiv: {
            display: 'grid',
            placeItems: "center",
            width: '100vw',
            marginTop: '10%'

        },
        text1: {
            fontSize: '1.2rem',
            letterSpacing: '.2rem',
            fontFamily: "Roboto",
            fontWeight: 700,
            padding: '0% 10%',

        },
        container: {
            padding: '0px 10%'
        }







    }),
);

const Serviceinsta: React.FC = () => {
    const classes = useStyles();


    return (
        <div className={classes.superdiv} id='googlebusiness'>
            <Typography className={classes.mainhead} variant="h4" >Process Of Facebook or Instagram Ads</Typography>


            <Process />




        </div>



    );
}
export default Serviceinsta
