import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';





const useStyles = makeStyles((theme: Theme) =>
    createStyles({


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
            [theme.breakpoints.down("sm")]: {
                fontSize: '.7rem',
                letterSpacing: '.1rem',
            }

        },
        container: {
            padding: '0px 10%'
        }







    }),
);
interface Props {
    text: string,
    image: string,
    reverse: boolean
}
const Tech: React.FC<Props> = (props) => {
    const classes = useStyles();

    return (


        <Grid container justify="space-around" alignItems="center" spacing={2} className={classes.container} direction={props.reverse ? "row-reverse" : "row"} >

            <Grid item sm={6}>
                <Typography className={classes.text1}>
                    {props.text}
                </Typography>
            </Grid>
            <Grid item sm={6}>
                <img src={props.image} style={{ maxWidth: '100%' }}></img>
            </Grid>




        </Grid>






    );
}
export default Tech