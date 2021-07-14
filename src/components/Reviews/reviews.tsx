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
interface boxtype1 {
    url: string,
    name: string,
    text: string
}
interface boxtype2 {
    url: string,

}
interface boxtype3 {
    url: string,
    name: string,
    aurl: string
}
interface Props {
    boxt1: boxtype1,
    boxt2: boxtype2,
    boxt3: boxtype3,
    boxt11: boxtype1,
    boxt22: boxtype2,
    boxt33: boxtype3,
    boxt222: boxtype2,
    boxt111: boxtype1,
    boxt1111: boxtype1,

}
const ReviewsCards: React.FC<Props> = (props) => {
    const classes = useStyles();
    return (

        <Box className={classes.root}>



            <Grid container spacing={4} justifyContent="center" alignItems="center">

                <Boxtype1 url={props.boxt1.url} name={props.boxt1.name} text={props.boxt1.text} />

                <Grid item  >
                    <Boxtype2 url={props.boxt2.url} />
                    <Boxtype3 url={props.boxt3.url} name={props.boxt3.name} aurl={props.boxt3.aurl} />
                </Grid>


                <Grid item  >

                    <Boxtype1 url={props.boxt11.url} name={props.boxt11.name} text={props.boxt11.text} />

                    <Boxtype2 url={props.boxt22.url} />
                </Grid>


                <Grid item >
                    <Boxtype3 url={props.boxt33.url} name={props.boxt33.name} aurl={props.boxt33.aurl} />

                    <Boxtype1 url={props.boxt111.url} name={props.boxt111.name} text={props.boxt111.text} />


                </Grid>


                <Grid item >
                    <Boxtype2 url={props.boxt222.url} />

                    <Boxtype1 url={props.boxt1111.url} name={props.boxt1111.name} text={props.boxt1111.text} />


                </Grid>
            </Grid>

        </Box>


    );
}
export default ReviewsCards