import React from 'react';
import { Box, Grid } from "@material-ui/core";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Boxtype1 from './boxtype1';
import Boxtype2 from './boxtype2';
import Boxtype3 from './boxtype3';



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


    }),
);

const ReviewsCards: React.FC<{ type: number }> = (props) => {
    const classes = useStyles();




    return (

        <Box className={classes.root}>




            <Grid container spacing={4} justifyContent="center" alignItems="center">

                {props.type === 1 ?
                    <Boxtype1 url="" name="Nanak Seth" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut " />
                    : props.type === 2 ?
                        <Boxtype2 url="https://www.youtube.com/watch?v=y_RHQ4mBDKA&list=RDbbbgGRsCGv8&index=6&ab_channel=T-Series" />
                        : props.type === 3 ?
                            <Boxtype3 url="https://ia600207.us.archive.org/29/items/MLKDream/MLKDream_64kb.mp3" name="Nanak seth" aurl="" />
                            : null
                }




            </Grid>

        </Box>


    );
}
export default ReviewsCards

