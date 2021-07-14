import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import wave from "../asserts/wave4.png";
import { Box } from '@material-ui/core';
const useStyles = makeStyles(() =>
    createStyles({


        Linkcontainer: {


            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            padding: "10px 30px",
            border: "2px solid #000B4F ",
            color: "#000B4F",
            fontFamily: 'Roboto',
            fontSize: '1rem',
            fontWeight: 400,
            borderRadius: '10px',
            textDecoration: 'none',
            maxWidth: 191,
            overflow: 'hidden',
            backgroundColor: 'white',
            background: `url(${wave}),white`,
            transition: '1.5s ease-out',
            backgroundSize: 'cover',
            backgroundPositionY: '-50%',
            backgroundRepeat: 'no-repeat',
            "&:hover": {
                color: 'white',
                backgroundPositionY: '100%',
                backgroungSize: '200% 100%',
            }


        }

    }),
);

const ButtonAppBar: React.FC = () => {
    const classes = useStyles();

    return (

        <Link href="/services" passHref >
            <Box className={classes.Linkcontainer}>

                Learn More
            </Box>


        </Link>

    );
}
export default ButtonAppBar