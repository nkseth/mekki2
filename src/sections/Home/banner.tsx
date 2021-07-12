import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import LearnmoreBtn from "../../components/learnmoreBtn"
import Path3 from '../svgs/path3';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'block',
            justifyContent: 'space-between',
            alignItems: 'center',

            width: '100vw',
            height: '100%',
            overflow: 'hidden',
            margin: 0,
            [theme.breakpoints.down('sm')]: {
                height: "100vh"
            },


        },
        textcontainer: {
            maxHeight: '120vh',
            maxWidth: '90vw',
            position: 'absolute',
            top: 170,
            left: 50,
            [theme.breakpoints.down('sm')]: {
                top: 250,
                fontSize: "3rem",
                left: 20,
            },
        },
        texthead: {
            fontFamily: "Oswald",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "4rem",
            color: '#000B4F',

        },
        textcaption: {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "1.5rem",
            lineHeight: 3,
            color: '#000B4F',
            [theme.breakpoints.down('sm')]: {

                fontSize: "1rem"
            }
        },
        textitem: {

        }



    }),
);

const Homebanner: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Path3 />
            <Grid container className={classes.textcontainer}>



                <Grid item sm={4} className={classes.textitem}>
                    <Typography variant="h1" className={classes.texthead}>
                        We are qualified & professional
                    </Typography>
                    <Typography variant="subtitle2" className={classes.textcaption}>
                        Automotive & Car workshop !
                    </Typography>
                    <LearnmoreBtn />
                </Grid>
            </Grid>





        </div>
    );
}
export default Homebanner