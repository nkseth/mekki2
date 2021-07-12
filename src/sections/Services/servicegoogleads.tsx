/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ads1 from '../../asserts/googlead1.png';
import ads2 from '../../asserts/googlead2.png';
import Ads from '../../components/ads';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainhead: {
      fontSize: '3rem',
      letterSpacing: '1rem',
      fontFamily: 'Roboto',
      fontWeight: 700,
      padding: '0% 10%',
      transform: 'scale(1, 1.5)',
      color: '#162183',
      marginTop: '3rem',
      marginBottom: '5rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
        letterSpacing: '1rem',
        marginTop: '1rem',
      },
    },
    superdiv: {
      display: 'grid',
      placeItems: 'center',
      width: '100vw',
      marginTop: '10%',
    },
    text1: {
      fontSize: '1.2rem',
      letterSpacing: '.2rem',
      fontFamily: 'Roboto',
      fontWeight: 700,
      padding: '0% 10%',
    },
    container: {
      padding: '0px 10%',
    },
  })
);

const Servicegoogleads: React.FC = () => {
  const classes = useStyles();

  const data = [
    {
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
      image: ads1,
      reverse: false,
    },
    {
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
      image: ads2,
      reverse: true,
    },
  ];

  return (
    <div className={classes.superdiv} id="youtubeandgoogleads">
      <Typography className={classes.mainhead} variant="h4">
        Youtube and Google Ads
      </Typography>
      {data.map((item, index) => (
    
        <Ads key={index} text={item.text} image={item.image} reverse={item.reverse} />
      ))}
    </div>
  );
};
export default Servicegoogleads;
