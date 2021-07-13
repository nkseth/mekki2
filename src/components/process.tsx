import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
    Timeline, TimelineItem, TimelineSeparator, TimelineConnector
    , TimelineContent, TimelineDot
} from "@material-ui/lab"
import p1 from "../asserts/p1.png";
import p2 from "../asserts/p2.png";
import p3 from "../asserts/p3.png";
import p4 from "../asserts/p4.png";
import p5 from "../asserts/p5.png";
import p6 from "../asserts/p6.png";
import p7 from "../asserts/p7.png";
import p8 from "../asserts/p8.png";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            padding: '6px 16px',
        },
        secondaryTail: {
            backgroundColor: theme.palette.secondary.main,
        },
        dot: {
            border: '20px solid darkblue',
            background: 'linear-gradient(94.61deg, #27AAE1 11.18%, #514DCC 99.98%)',
            width: '100px',
            height: '100px'
        },
        heading: {
            textAlign: 'center',
            diplay: 'grid',
            placeItems: 'center',

            width: '100%',
            fontFamily: 'Roboto',
            color: '#01246D',
            fontWeight: 700,
            marginTop: '20px',
            [theme.breakpoints.down("sm")]: {
                fontSize: '1rem'
            }
        },
        content: {
            textAlign: 'center',
            diplay: 'grid',
            placeItems: 'center',

            width: '100%',
            fontFamily: 'Roboto',
            color: '#01246D',
            fontWeight: 400,
            marginTop: '20px',
            [theme.breakpoints.down("sm")]: {
                fontSize: '.5rem'
            }

        },
        image: {
            [theme.breakpoints.down("sm")]: {
                maxWidth: '100%'
            }
        },
        maingrid: {

            padding: '10%',
            [theme.breakpoints.down("sm")]: {
                padding: '1%',
            }
        }
    }));

const CustomizedTimeline: React.FC = () => {
    const classes = useStyles();
    const data = [{ image: p1, heading: "1. Consultation", content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero' },
    { image: p2, heading: "2. Mockup", content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero' },
    { image: p3, heading: "3. Design", content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero' },
    { image: p4, heading: "4. Review", content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero' },
    { image: p5, heading: "5. Build", content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero' },
    { image: p6, heading: "6. Launch", content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero' },
    { image: p7, heading: "7. Maintain", content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero' },
    { image: p8, heading: "8. Iterate", content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero' },

    ]
    return (
        <Timeline align="alternate">

            {data.map((item) => (
                <TimelineItem>

                    <TimelineSeparator>
                        <TimelineConnector style={{ background: 'transparent', borderLeft: '10px dashed darkblue' }} />
                        <TimelineDot className={classes.dot}>

                        </TimelineDot>

                    </TimelineSeparator>
                    <TimelineContent>
                        <Grid container className={classes.maingrid} justifyContent="center" alignItems="center">
                            <Grid item container justifyContent="center" alignItems="center">
                                <Box >
                                    <img src={item.image} className={classes.image}></img>
                                </Box>
                            </Grid>
                            <Grid item container >
                                <Typography variant="h3" className={classes.heading}>{item.heading}</Typography>
                            </Grid>
                            <Grid item container >
                                <Typography variant="h6" className={classes.content}>{item.content}</Typography>
                            </Grid>

                        </Grid>
                    </TimelineContent>
                </TimelineItem>
            ))}



        </Timeline>
    );
}
export default CustomizedTimeline