import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Link from 'next/link'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import whitelogo from '../asserts/whitelogo.png'
import Sociallinks from './svgs/sociallinks'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootGrid: {
      backgroundColor: 'yellow',

      width: '100vw',

      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',

      background: ` linear-gradient(131.81deg, #27AAE1 -1.11%, #514DCC 105.12%) `,
      marginTop: '6rem',
      [theme.breakpoints.down('sm')]: {
        width: '100vw',
      },
    },

    Links: {
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: 200,
      transition: '0.3s ease-out',
      '&:active , &:visited,&:hover': {
        borderBottom: '2px solid white',
        cursor: 'pointer',
      },
    },
    contacthead: {
      fontSize: '2rem',
      marginBottom: '10px',
      color: 'white',
      fontFamily: 'Roboto',
    },
    contact: {
      fontSize: '1rem',
      marginBottom: '5px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    img: {
      maxWidth: '100%',
      marginBottom: '40px',
    },
    basebox: {
      background: '#01246D',
      minHeight: '6vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    basetext: {
      color: 'white',
    },
  })
)

const Footer: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.rootGrid}>
      <Grid item sm={12} container justifyContent="space-between" alignItems="flex-start" style={{ padding: '7% 0' }}>
        <Grid item container sm={5} justifyContent="center" alignItems="center">
          <img src={whitelogo} className={classes.img} alt="logo" />
          <Sociallinks />
        </Grid>
        <Grid item container sm={2} justifyContent="center" alignItems="flex-start" direction="column">
          <Box p={1}>
            <Link href="/support" passHref>
              <Box className={classes.Links} style={{ color: 'white' }}>
                Support
              </Box>
            </Link>
          </Box>

          <Box p={1}>
            <Link href="/contactus" passHref>
              <Box className={classes.Links} style={{ color: 'white' }}>
                Contact Us
              </Box>
            </Link>
          </Box>

          <Box p={1}>
            <Link href="/aboutus">
              <Box className={classes.Links} style={{ color: 'white' }}>
                About Us
              </Box>
            </Link>
          </Box>

          <Box p={1}>
            <Link href="/gcs">
              <Box className={classes.Links} style={{ color: 'white' }}>
                GCS
              </Box>
            </Link>
          </Box>
          <Box p={1}>
            <Link href="/leagalmentions">
              <Box className={classes.Links} style={{ color: 'white' }}>
                Legal Mentions
              </Box>
            </Link>
          </Box>
        </Grid>
        <Grid item container sm={5} justifyContent="center" alignItems="flex-start" direction="column">
          <Typography className={classes.contacthead}>Contact </Typography>
          <Typography className={classes.contact}>
            <FaMapMarkerAlt style={{ marginRight: '5px' }} /> 321 Pikes Place Parkway Seattle, WA 54321{' '}
          </Typography>
          <Typography className={classes.contact}>
            <FaPhoneAlt style={{ marginRight: '5px' }} /> (555) 765-4321{' '}
          </Typography>
          <Typography className={classes.contact}>
            <FaEnvelope style={{ marginRight: '5px' }} />
            Mikki@company.com
          </Typography>
        </Grid>
      </Grid>

      <Grid container className={classes.basebox}>
        <Typography className={classes.basetext}>© 2021 Mikki Company. Privacy Policy | Terms & Conditions</Typography>
      </Grid>
    </Grid>
  )
}
export default Footer
