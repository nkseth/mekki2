import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import bgi from '../asserts/bgu.png'
import AppointmentBtn from '../components/bookAppointmet'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootGrid: {
      borderRadius: 25,
      alignItems: 'center',
      backgroundColor: 'yellow',
      width: '80vw',
      height: '40vh',
      display: 'flex',
      alignItem: 'center',
      justifyContent: 'center',
      filter: 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.322))',
      background: `linear-gradient(180deg, rgba(39,170,225,.73) 0%, rgba(81,77,204,.73) 90%),url(${bgi}) no-repeat  50% 50% `,
      backgroundPosition: '50% 90%',
      backgroundOrigin: '50% 50%',
      backgroundSize: 'cover',

      [theme.breakpoints.down('sm')]: {
        width: '100vw',
      },
    },
    textcontainer: {
      height: '60vh',
      display: 'grid',
      placeItems: 'center',
    },
    texthead: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '3rem',
      color: 'white',
      paddingLeft: '50px',

      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
    },
    textcaption: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 3,
      color: '#000B4F',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
  })
)

const Bookbox: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.textcontainer}>
      <Grid container className={classes.rootGrid}>
        <Grid item container sm={6} justify="center" alignItems="center">
          <Typography variant="h4" className={classes.texthead}>
            Book Now your free coaching call
          </Typography>
        </Grid>
        <Grid item container sm={6} justify="center" alignItems="center">
          <AppointmentBtn />
        </Grid>
      </Grid>
    </div>
  )
}
export default Bookbox
