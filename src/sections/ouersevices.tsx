import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import bgi from '../asserts/service.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
    },

    mainhead: {
      fontSize: '5rem',
      letterSpacing: '3rem',
      fontFamily: 'Roboto',
      fontWeight: 700,
      transform: 'scale(1, 1.5)',
      color: '#162183',
      marginTop: '3rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
        letterSpacing: '1rem',
        marginTop: '1rem',
      },
    },
    subHead1: {
      fontFamily: 'Lobster',
      fontSize: '5rem',
      padding: '0px 10px',
      transition: '2s ease-out',
      fontWeight: 700,
      transform: 'translate(0%,0%)',
      color: '#162183',
      overflow: 'hidden',
    },
    subHead2: {
      fontFamily: 'Roboto',
      fontSize: '1rem',
      padding: '0px 10px',
      transition: '2s ease-out',
      fontWeight: 400,
      transform: 'translate(0%,0%)',
      color: '#162183',
      overflow: 'hidden',
    },
    img: {
      overflow: 'hidden',
      width: '100vw',
      '& img': {
        maxWidth: '100%',
        objectFit: 'cover',

        width: '70%',
        transform: 'translate(0%,1000%)',
        padding: theme.spacing(5),
        transition: '4s ease-out',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
      },
    },
    GridContainer: {
      width: '100%',
    },
    lr: {
      fontFamily: 'Lobster',
      fontSize: '5rem',
      padding: '0px 10px',
      transition: '1.5s ease-out',
      fontWeight: 700,
      transform: 'translate(0%,0%)',
      color: '#162183',

      marginTop: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
      },
    },
    lr2: {
      fontFamily: 'Roboto',
      fontSize: '1.5rem',
      padding: '0px 10px',
      transition: '1.5s ease-out',
      fontWeight: 700,
      transform: 'translate(0%,0%)',
      color: '#162183',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },

    noaimatelr: {
      transition: '1s ease-out',
      transform: 'translate(-1000%,0%)',
    },
    noaimatetd: {
      transition: '1s ease-out',
      transform: 'translate(0%,1000%)',
    },

    noaimaterl: {
      transition: '1s ease-out',
      transform: 'translate(1000%,0%)',
    },
    noaimated: {
      transition: '1s ease-out',
      transform: 'translate(1000%,1000%)',
    },
    noaimatedt: {
      transition: '1s ease-out',
      transform: 'translate(0%,-1000%)',
    },
    noaimated2: {
      transition: '1s ease-out',
      transform: 'translate(-1000%,-1000%)',
    },
    imgani: {
      width: '100vw',
      display: 'grid',
      placeItems: 'center',
      '& img': {
        maxWidth: '100%',
        objectFit: 'cover',

        width: '70%',
        transform: 'translate(0%,0%)',

        transition: '2.5s ease-in',
        [theme.breakpoints.down('sm')]: {
          width: '90%',
        },
      },
    },
  })
)

const Ourservicees: React.FC = () => {
  const classes = useStyles()
  const [animate, setanimate] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 750) {
        setanimate(true)
      } else {
        setanimate(false)
      }
    })
  }, [])
  return (
    <div className={classes.root}>
      <Grid container className={classes.GridContainer} spacing={5}>
        <Grid item sm={12} container justify="center" alignItems="center">
          <Typography className={classes.mainhead} variant="h4">
            Our Service
          </Typography>
        </Grid>
        <Grid item sm={12} container justify="center" alignItems="center" className={classes.subHead1}>
          <Typography variant="h3" className={animate ? classes.lr : classes.noaimatelr}>
            All
          </Typography>
          <Typography variant="h3" className={animate ? classes.lr : classes.noaimated}>
            the
          </Typography>
          <Typography variant="h3" className={animate ? classes.lr : classes.noaimatetd}>
            Services
          </Typography>
          <Typography variant="h3" className={animate ? classes.lr : classes.noaimatedt}>
            Are
          </Typography>
          <Typography variant="h3" className={animate ? classes.lr : classes.noaimaterl}>
            Without
          </Typography>
          <Typography variant="h3" className={animate ? classes.lr : classes.noaimated2}>
            Engagement
          </Typography>
        </Grid>
        <Grid item sm={12} container justify="center" alignItems="flex-start" className={classes.subHead2}>
          <Typography variant="h3" className={animate ? classes.lr2 : classes.noaimatetd}>
            for every service purchase, an amount will be done to a humanitarian organization
          </Typography>
        </Grid>
        <Grid
          item
          sm={12}
          className={animate ? classes.imgani : classes.img}
          container
          justify="center"
          alignItems="flex-start"
        >
          <img src={bgi} alt="bgi" />
        </Grid>
      </Grid>
    </div>
  )
}
export default Ourservicees
