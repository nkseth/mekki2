import React from 'react';
import { Box, Card, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import wavi from '../asserts/wavi.png'


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



                },
                "& #cc": {
                    color: "white"


                }

            }



        },
        title: {
            fontSize: '2rem',
            color: "#000B4F",
            margin: '10% 0%',
            zIndex: 4,
            fontWeight: 700,
            letterSpacing: '.5rem',
            textAlign: 'center'
        },
        subheading: {
            fontSize: '1rem',
            color: "#000B4F",
            margin: '10% 0%',
            zIndex: 4,
            textAlign: 'center',
            marginBottom: '50px'


        },
        buttonC: {
            display: 'grid',
            placeItems: 'center'
        },
        imageContainer: {

            width: '120px',
            height: '120px',
            display: 'grid',
            placeContent: 'center',
            borderRadius: '50%',
            position: 'absolute',
            top: "0%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 4,
            backgroundSize: 'cover',
            backgroundPosition: 'center'


        },
        imgi: {
            maxWidth: '100%',
            objectFit: 'cover',
            placeSelf: 'center'

        },


        wavebox: {
            background: `url(${wavi})`,
            position: 'absolute',
            width: "100%",
            maxWidth: '100%',
            zIndex: -1,
            overflow: "hidden",
            left: 0,
            bottom: -20,
            height: 120,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '50%'
        },

        contentContainer: {
            overflow: 'hidden',
            position: 'relative',

            padding: '20% 5%',
            zIndex: 3,

        },

        "@keyframes animate": {
            from: {
                height: 120,
                maxWidth: '120%'
            },
            to: {
                height: "190%",
                maxWidth: '120%'

            },
        },





    }),
);

interface Props {
    icons: string,
    title: string,
    subheading: string
}

const Aboutcards: React.FC<Props> = (props) => {
    const classes = useStyles();

    return (

        <Card className={classes.root}>

            <Box className={classes.imageContainer} id="ig1" style={{ backgroundImage: `url(${props.icons})` }}>

            </Box >
            <Box className={classes.contentContainer} >
                <Typography variant="h3" className={classes.title} id="cc">{props.title}</Typography>
                <Typography variant="h5" className={classes.subheading} id="cc">{props.subheading}</Typography>


                <span className={classes.wavebox} >


                </span>
            </Box>




        </Card>


    );
}
export default Aboutcards