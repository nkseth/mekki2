import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Logo from '../../asserts/whitelogo.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '9%',
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
            background: 'linear-gradient(135.12deg, #27AAE1 2.4%, #514DCC 98.4%)',
            position: 'relative',
            borderRadius: "20px 0px 0px 20px",
            minHeight: '100vh',
            [theme.breakpoints.down('sm')]: {
                borderRadius: "0px",
            }

        },
        container: {

            borderRadius: 20,
            filter: "drop-shadow(0px 6px 25px rgba(0, 0, 0, 0.239))"


        },
        imgbox: {

            position: 'absolute',
            top: 70,
            left: 30

        },
        textbox: {

            position: 'absolute',
            top: 270,
            left: 30,
            maxWidth: '70%',
            [theme.breakpoints.down("sm")]: {
                top: 300,
                maxWidth: '90%'
            }
        },
        heading: {
            color: "white",
            fontSize: '2.5rem',
            fontWeight: 900,
            fontFamily: 'Roboto',
            [theme.breakpoints.down("sm")]: {
                fontSize: '1.5rem',
            }
        },
        subheading: {
            color: "white",
            fontSize: '1.5rem',
            fontWeight: 400,
            fontFamily: 'Roboto',
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
        }

    }),
);

export default function Appointmentbanner() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container justify='center' alignItems="center" className={classes.container}>

                <Grid item xs={12} lg={5} className={classes.bannerbg} >
                    <Box className={classes.imgbox} >
                        <img src={Logo} />
                    </Box>
                    <Box className={classes.textbox}>
                        <Typography className={classes.heading}>
                            Coaching Stratégique
                            OFFERT
                        </Typography >
                        <Box className={classes.svgcon}>
                            <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.008 22.623H24.877V18.492C24.877 18.1268 24.7319 17.7766 24.4737 17.5183C24.2154 17.2601 23.8652 17.115 23.5 17.115C23.1348 17.115 22.7846 17.2601 22.5263 17.5183C22.2681 17.7766 22.123 18.1268 22.123 18.492V24C22.1229 24.1809 22.1584 24.36 22.2276 24.5271C22.2967 24.6942 22.3981 24.8461 22.526 24.974C22.6539 25.1019 22.8058 25.2033 22.9729 25.2724C23.14 25.3416 23.3191 25.3771 23.5 25.377H29.008C29.3732 25.377 29.7234 25.2319 29.9817 24.9737C30.2399 24.7154 30.385 24.3652 30.385 24C30.385 23.6348 30.2399 23.2846 29.9817 23.0263C29.7234 22.7681 29.3732 22.623 29.008 22.623ZM45.623 22.623H44.085C43.7472 17.64 41.6151 12.9482 38.0835 9.41655C34.5518 5.88492 29.86 3.75278 24.877 3.415V1.877C24.877 1.5118 24.7319 1.16155 24.4737 0.903314C24.2154 0.645076 23.8652 0.5 23.5 0.5C23.1348 0.5 22.7846 0.645076 22.5263 0.903314C22.2681 1.16155 22.123 1.5118 22.123 1.877V3.415C17.14 3.75278 12.4482 5.88492 8.91655 9.41655C5.38492 12.9482 3.25278 17.64 2.915 22.623H1.377C1.0118 22.623 0.661552 22.7681 0.403314 23.0263C0.145076 23.2846 0 23.6348 0 24C0 24.3652 0.145076 24.7154 0.403314 24.9737C0.661552 25.2319 1.0118 25.377 1.377 25.377H2.915C3.25278 30.36 5.38492 35.0518 8.91655 38.5835C12.4482 42.1151 17.14 44.2472 22.123 44.585V46.124C22.123 46.4892 22.2681 46.8395 22.5263 47.0977C22.7846 47.3559 23.1348 47.501 23.5 47.501C23.8652 47.501 24.2154 47.3559 24.4737 47.0977C24.7319 46.8395 24.877 46.4892 24.877 46.124V44.585C29.86 44.2472 34.5518 42.1151 38.0835 38.5835C41.6151 35.0518 43.7472 30.36 44.085 25.377H45.624C45.9892 25.377 46.3395 25.2319 46.5977 24.9737C46.8559 24.7154 47.001 24.3652 47.001 24C47.001 23.6348 46.8559 23.2846 46.5977 23.0263C46.3395 22.7681 45.9892 22.623 45.624 22.623H45.623ZM40.023 25.377H41.33C40.9971 29.6299 39.1568 33.6242 36.1404 36.6408C33.1241 39.6573 29.1299 41.4978 24.877 41.831V40.524C24.877 40.1588 24.7319 39.8086 24.4737 39.5503C24.2154 39.2921 23.8652 39.147 23.5 39.147C23.1348 39.147 22.7846 39.2921 22.5263 39.5503C22.2681 39.8086 22.123 40.1588 22.123 40.524V41.831C17.8699 41.4981 13.8755 39.6576 10.8589 36.6411C7.84238 33.6245 6.00192 29.6301 5.669 25.377H6.977C7.3422 25.377 7.69245 25.2319 7.95069 24.9737C8.20892 24.7154 8.354 24.3652 8.354 24C8.354 23.6348 8.20892 23.2846 7.95069 23.0263C7.69245 22.7681 7.3422 22.623 6.977 22.623H5.669C6.00192 18.3699 7.84238 14.3755 10.8589 11.3589C13.8755 8.34238 17.8699 6.50192 22.123 6.169V7.477C22.123 7.8422 22.2681 8.19245 22.5263 8.45069C22.7846 8.70892 23.1348 8.854 23.5 8.854C23.8652 8.854 24.2154 8.70892 24.4737 8.45069C24.7319 8.19245 24.877 7.8422 24.877 7.477V6.169C29.1301 6.50192 33.1245 8.34238 36.1411 11.3589C39.1576 14.3755 40.9981 18.3699 41.331 22.623H40.024C39.6588 22.623 39.3086 22.7681 39.0503 23.0263C38.7921 23.2846 38.647 23.6348 38.647 24C38.647 24.3652 38.7921 24.7154 39.0503 24.9737C39.3086 25.2319 39.6588 25.377 40.024 25.377H40.023Z" fill="#F8F8F8" />
                            </svg>
                            <Typography className={classes.svgtime}>   - 7min
                            </Typography>
                        </Box>



                        <Typography className={classes.subheading}>
                            Le Plan Complet D'évasion De La
                            "Rat Race 100 % financé par
                            l'Etat...
                            <br />
                            Touche Tes Premiers Revenus En
                            Travaillant D'où Tu Veux D'ici 30
                            Jours...

                        </Typography>
                    </Box>

                </Grid>
                <Grid item lg={7} sm={12} style={{ width: '100%' }}>

                    {/*  this is the i frame of harmonizely*/}
                    <iframe src="https://harmonizely.com/nanaksethh?view=compact" style={{ width: "100%", height: "100%", minHeight: '40vh', padding: '0', margin: 0 }} frameBorder="0" ></iframe>
                </Grid>
            </Grid>

        </div >
    );
}
