import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

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
      marginBottom: '1rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
        letterSpacing: '1rem',
        marginTop: '1rem',
      },
    },
    subhead: {
      fontSize: '1.5rem',

      fontFamily: 'Roboto',

      padding: '0% 10%',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    subhhead: {
      fontSize: '2rem',

      fontFamily: 'Roboto',
      color: 'gray',
      padding: '0% 10%',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    subhhead2: {
      fontSize: '2rem',
      marginTop: '5%',
      fontFamily: 'Roboto',
      color: 'darkblue',
      padding: '0% 10%',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
  })
)

const Cvg: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container justify="center" alignItems="center" style={{ marginTop: '10%' }}>
      <Grid item sm={12} container justify="center" alignItems="flex-start" direction="column">
        <Typography className={classes.mainhead}>CVG</Typography>
        <Typography className={classes.subhhead}>CGV – Conditions Générales de vente</Typography>
      </Grid>
      <Grid item sm={12} container justify="center" alignItems="flex-start" direction="column">
        <Typography className={classes.subhhead2}>PRÉAMBULE</Typography>
        <Typography className={classes.subhead}>
          Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet
        </Typography>
      </Grid>
      <Grid item sm={12} container justify="center" alignItems="flex-start" direction="column">
        <Typography className={classes.subhhead2}>PRÉAMBULE</Typography>
        <Typography className={classes.subhead}>
          Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet
        </Typography>
      </Grid>
      <Grid item sm={12} container justify="center" alignItems="flex-start" direction="column">
        <Typography className={classes.subhhead2}>PRÉAMBULE</Typography>
        <Typography className={classes.subhead}>
          Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet
        </Typography>
      </Grid>
      <Grid item sm={12} container justify="center" alignItems="flex-start" direction="column">
        <Typography className={classes.subhhead2}>PRÉAMBULE</Typography>
        <Typography className={classes.subhead}>
          Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet
        </Typography>
      </Grid>
      <Grid item sm={12} container justify="center" alignItems="flex-start" direction="column">
        <Typography className={classes.subhhead2}>PRÉAMBULE</Typography>
        <Typography className={classes.subhead}>
          Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet
        </Typography>
      </Grid>
      <Grid item sm={12} container justify="center" alignItems="flex-start" direction="column">
        <Typography className={classes.subhhead2}>PRÉAMBULE</Typography>
        <Typography className={classes.subhead}>
          Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet
        </Typography>
      </Grid>
    </Grid>
  )
}
export default Cvg
