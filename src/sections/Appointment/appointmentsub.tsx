import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import appsub from '../../asserts/appsub.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '5%',
            zIndex: 100,
            width: '100vw',

            padding: "5% 3%"
        },

        logo: {

            maxWidth: 150,
            margin: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                maxWidth: 70,


            },
        },
        bannerbg: {
            position: 'relative',
            borderRadius: "20px 0px 0px 20px",
            minHeight: '100vh',


        },
        container: {

            borderRadius: 20,



        },
        imgbox: {



        },
        textbox: {
            maxWidth: '100%',

        },
        heading: {
            fontFamily: "Oswald",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "3.7rem",
            lineHeight: "95px",
            letterSpacing: "0.17em",
            color: "#000B4F",
            textDecoration: 'underline'

        },
        subheading: {

            fontSize: '1.2rem',
            fontWeight: 400,
            fontFamily: 'Roboto',
            color: "#000B4F",
            [theme.breakpoints.down("sm")]: {
                fontSize: '.7rem',
            }
        },
        svgtime: {
            color: "white",
            fontSize: '1rem',
            fontWeight: 500,
            fontFamily: 'Roboto',
            marginLeft: '5px'

        },
        svgcon: {
            display: 'flex',
            alignItems: 'center',
            margin: '10px 0px',
            "& svg": {
                width: 30,
                height: 30,

            }
        },
        imgi: {
            maxWidth: '100%'
        }

    }),
);

export default function Appointmentsub() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={12} lg={7} className={classes.bannerbg} >

                    <Box className={classes.textbox}>
                        <Typography className={classes.heading}>
                            This Is Not An Ordinary Call ...
                        </Typography >




                        <Typography className={classes.subheading}>
                            <br /><br />
                            For the more committed who are ready to get started, we offer the opportunity to be coached by a coach of the LS Academy! <br /><br />

                            The purpose of this call is very simple! We'll ask you 2-3 short questions to give you extreme clarity on what you need to do to make your coaching business successful and reach your first income within 30 days... <br /><br />

                            And on our side, to be transparent with you, if we see that we can help you achieve your goals so that you can finally live the life that really inspires you in the next 10 to 12 weeks, in which case we will offer you to join our program!  <br /><br />

                            But no matter what happens, whether we work together or not, we guarantee that this coaching will be the best time investment you can make this year.

                        </Typography>
                    </Box>

                </Grid >
                <Grid item lg={5}>
                    <Box className={classes.imgbox}>
                        <img src={appsub} className={classes.imgi} />
                    </Box>


                </Grid>
            </Grid >

        </div >
    );
}
