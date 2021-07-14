import React from 'react';
import { Box, Grid, Typography, Avatar } from "@material-ui/core";
import { createStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() =>
    createStyles({
        root: {

            position: 'relative',
            overflow: "visible",
            "&:hover": {
                "& span": {
                    animation: " $animate 1s ease-out ",
                    animationFillMode: "forwards"
                },
                "& #ig1": {
                    color: 'white',

                    background: 'linear-gradient(94.61deg, #27AAE1 11.18%, #514DCC 99.98%)'

                },
                "& #cc": {
                    color: "white"


                }

            }

        },
        box1: {
            display: 'grid',
            placeItems: 'center',
            borderBottom: '10px solid #86B8D9',
            background: '#DEDEDE',
            boxShadow: '2px 5px 10px black',
            borderRadius: 10,
            maxWidth: 200,
            minHeight: 150,
            margin: 'rem 1rem',
            padding: '5px'
        },

        typo: {
            fontSize: '.8rem',
            margin: '8px',
            textAlign: 'center'

        }


    }),
);

const Boxtype1: React.FC<{ name: string, text: string, url: string }> = (props) => {
    const classes = useStyles();

    return (
        <Grid item  >
            <Box className={classes.box1}>
                <Avatar src={props.url} />
                <Typography>{props.name}</Typography>
                <Typography className={classes.typo}>{props.text}</Typography>
            </Box>
        </Grid>
    );
}
export default Boxtype1

