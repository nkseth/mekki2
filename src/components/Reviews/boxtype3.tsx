import React from 'react';
import { Box, Grid, Typography, Avatar } from "@material-ui/core";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ReactAudioPlayer from 'react-audio-player';
import { AiFillAudio } from "react-icons/ai";



const useStyles = makeStyles(() =>
    createStyles({

        box3: {
            display: 'grid',
            placeItems: 'center',
            borderBottom: '10px solid #86B8D9',

            boxShadow: '2px 5px 10px black',
            borderRadius: 10,
            width: 150,
            height: 130,
            margin: '1rem 1rem'
        },

        typo: {
            fontSize: '.8rem',
            margin: '8px',
            textAlign: 'center'

        }


    }),
);

const Boxtype3: React.FC<{ url: string, aurl: string, name: string }> = (props) => {
    const classes = useStyles();




    return (





        <Grid>
            <Box className={classes.box3}>
                <Avatar src={props.aurl} />
                <Typography>{props.name}</Typography>
                <AiFillAudio size={20} />
                <ReactAudioPlayer style={{ maxWidth: '100%', height: '20px' }} src={props.url} controls />
            </Box>
        </Grid>



    );
}
export default Boxtype3

