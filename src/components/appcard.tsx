import React from 'react'
import { Box, Card, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import wavi from '../asserts/wavi.png'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'relative',
      overflow: 'visible',
      '&:hover': {
        '& span': {
          animation: ' $animate 1s ease-out ',
          animationFillMode: 'forwards',
        },
        '& #ig1': {
          color: 'white',

          background: 'linear-gradient(94.61deg, #27AAE1 11.18%, #514DCC 99.98%)',
        },
        '& #cc': {
          color: 'white',
        },
      },
    },
    title: {
      fontSize: '1.2rem',
      color: '#000B4F',
      margin: '10% 0%',
      zIndex: 4,
      textAlign: 'center',
    },
    subheading: {
      fontSize: '1rem',
      color: '#000B4F',
      margin: '10% 0%',
      zIndex: 4,
      textAlign: 'center',
    },
    buttonC: {
      display: 'grid',
      placeItems: 'center',
    },
    imageContainer: {
      display: 'grid',
      placeContent: 'center',

      zIndex: 4,
    },
    imgi: {
      maxWidth: '100%',
      objectFit: 'cover',
      placeSelf: 'center',
    },
    button: {
      background: '#829CD0',
      color: 'white',
      width: 200,
      height: 60,
      borderRadius: 50,
      zIndex: 2,
      '&:hover': {
        background: 'linear-gradient(94.61deg, #27AAE1 11.18%, #514DCC 99.98%)',
      },
    },
    wavebox: {
      background: `url(${wavi})`,
      position: 'absolute',
      width: '100%',
      maxWidth: '100%',
      zIndex: -1,
      overflow: 'hidden',
      left: 0,
      bottom: -20,
      height: 120,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: '50%',
    },

    contentContainer: {
      overflow: 'hidden',
      position: 'relative',

      padding: '20% 10%',
      zIndex: 3,
    },

    '@keyframes animate': {
      from: {
        height: 120,
        maxWidth: '120%',
      },
      to: {
        height: '190%',
        maxWidth: '120%',
      },
    },

    '@keyframes text': {
      from: {
        color: 'black',
      },
      to: {
        color: 'white',
      },
    },
  })
)

interface Props {
  icons: string
  subheading: string
}
const Cards: React.FC<Props> = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Box className={classes.contentContainer}>
        <Box className={classes.imageContainer}>
          <img src={props.icons} className={classes.imgi} alt="icons" />
        </Box>

        <Typography variant="h5" className={classes.subheading} id="cc">
          {props.subheading}
        </Typography>

        <span className={classes.wavebox} />
      </Box>
    </Card>
  )
}

export default Cards
