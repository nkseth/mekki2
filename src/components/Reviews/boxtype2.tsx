import React, { useState } from 'react';
import { Box, Grid } from "@material-ui/core";
import { createStyles, makeStyles } from '@material-ui/core/styles';

import VideoModel from '../videomodel'


const useStyles = makeStyles(() =>
    createStyles({

        box2: {
            display: 'grid',
            placeItems: 'center',

            background: ' linear-gradient(180deg, #27AAE1 0%, #514DCC 100%)',
            boxShadow: '2px 5px 10px black',
            borderRadius: 10,

            width: 200,
            height: 150,
            margin: '1rem 1rem'
        },

        typo: {
            fontSize: '.8rem',
            margin: '8px',
            textAlign: 'center'

        }


    }),
);

const Boxtype2: React.FC<{ url: string }> = (props) => {
    const classes = useStyles();
    const [videom, setvideom] = useState(false)
    const [videourl, setvideourl] = useState("")
    const openvideo = (url: string) => {
        setvideom(true)
        setvideourl(url)

    }
    const closevideo = () => {
        setvideom(false)
    }



    return (

        <Box>


            <VideoModel open={videom} close={closevideo} url={videourl} />
            <Grid item  >
                <Box className={classes.box2} onClick={() => openvideo(props.url)}>
                    <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.98" d="M32.3045 10.0066C34.0184 10.9839 35.438 12.404 36.4145 14.1183C37.3911 15.8327 37.8886 17.7781 37.8551 19.7507C37.8215 21.7234 37.2581 23.6508 36.2239 25.3309C35.1896 27.011 33.7226 28.3822 31.9764 29.3006L16.8579 37.252C15.1672 38.1412 13.2742 38.5748 11.365 38.5103C9.45584 38.4457 7.59639 37.8851 5.96965 36.8837C4.34292 35.8823 3.00496 34.4746 2.08745 32.7992C1.16994 31.1237 0.704504 29.2382 0.736941 27.3282L1.01601 10.9152C1.04852 9.00522 1.57779 7.13662 2.55173 5.49329C3.52567 3.84997 4.91071 2.48855 6.57054 1.54302C8.23038 0.597494 10.1078 0.100445 12.0181 0.100791C13.9283 0.101137 15.8055 0.598866 17.465 1.54499L32.3045 10.0066Z" fill="white" />
                    </svg>

                </Box>
            </Grid>
        </Box>


    );
}
export default Boxtype2

