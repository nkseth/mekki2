import React from 'react';
import { Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import contactbanner from '../../asserts/contactbanner.png'
import Form from '../../components/form'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        mainhead: {
            fontSize: '2rem',
            letterSpacing: '.5rem',
            fontFamily: "Roboto",
            maxHeight: '70vh',
            fontWeight: 700,
            display: 'grid',
            placeItems: 'center',
            transform: "scale(1, 1.5)",
            color: '#162183',

            marginBottom: "3rem",
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
            marginTop: '7%',


        },




    }),
);

const Contact: React.FC = () => {
    const classes = useStyles();


    return (
        <div className={classes.superdiv}>
            <Grid container>
                <Grid item sm={6} >
                    <img src={contactbanner} style={{ maxWidth: '90%' }}></img>
                </Grid>
                <Form />
            </Grid>







        </div>



    );
}
export default Contact