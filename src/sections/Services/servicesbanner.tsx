import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Search from '../../asserts/search.png'
import servicebg from '../../asserts/servicebg.png'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            backgroundImage: `url(${servicebg})`,
            backgroundSize: '100% 100%',
            width: '100vw',
            height: '70vh',
            overflow: 'hidden',
            display: 'grid',
            placeItems: 'center',

            [theme.breakpoints.down('sm')]: {
                height: "60vh",
                backgroundSize: 'cover',

            },



        },
        textc: {

        },
        texti: {
            fontFamily: 'Playball',
            fontSize: '5rem',
            color: "white",
            [theme.breakpoints.down('sm')]: {
                fontSize: '2rem',

            },
            textAlign: 'center'
        },
        texts: {
            fontFamily: 'Roboto',
            fontSize: '1.2rem',
            color: "white",
            [theme.breakpoints.down('sm')]: {
                fontSize: '.7rem',

            },
            textAlign: 'center'
        },
        searchinput: {
            border: "none",
            width: '100%',
            fontSize: '2rem',
            "&:focus-visible": {
                border: 'none',
                outline: 'none'
            },
            "&::placeholder": {
                color: 'darkblue',
                fontFamily: 'Playball'
            }
        },
        searchbox: {
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'enter',
            padding: '10px 20px',
            marginTop: '20px',
            borderRadius: '20px',
            width: '30%',
            height: '5%',
            minWidth: '300px'
        },
        searchimg: {
            height: "10%",
            width: '10%'
        }



    }),
);

const Servicebanner: React.FC = () => {
    const classes = useStyles();

    return (

        <Box className={classes.container} >

            <Grid className={classes.textc} container sm={12} item justify="center" alignItems='center' >
                <Grid sm={12} container item justify="center" direction="column" alignItems="center">
                    <Typography className={classes.texti}>We Are Qualified & Professional</Typography>
                    <Typography className={classes.texts}>Automotive & Car workshop !</Typography>
                    <Box className={classes.searchbox}>

                        <input className={classes.searchinput} placeholder="Search">

                        </input>
                        <img src={Search} className={classes.searchimg} />
                    </Box>
                </Grid>
            </Grid>
        </Box>






    );
}
export default Servicebanner