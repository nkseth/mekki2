import React from 'react'
import { Grid, Card, Typography, Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainhead: {
      fontSize: '2rem',
      letterSpacing: '.5rem',
      fontFamily: 'Roboto',
      maxHeight: '70vh',
      fontWeight: 700,
      display: 'grid',
      placeItems: 'center',
      transform: 'scale(1, 1.5)',
      color: '#162183',

      marginBottom: '3rem',
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
      marginTop: '7%',
    },
    text1: {
      fontSize: '1.2rem',
      letterSpacing: '.2rem',
      fontFamily: 'Roboto',
      fontWeight: 700,
      padding: '0% 10%',
    },
    container: {
      background: 'transparent',
      border: ' 4px solid #000B4F ',
      margin: '1%',
      padding: '10% 5%',
      width: '80%',

      boxShadow: '0px 0px 15px darkblue',
    },
    searchinput: {
      background: 'transparent',
      border: 'none',
      margin: '4px',

      fontSize: '1rem',
      '&:focus-visible': {
        border: 'none',
        outline: 'none',
      },
      '&::placeholder': {
        color: 'darkblue',
      },
    },
    searchbox: {
      background: 'transparent',

      display: 'flex',
      alignItems: 'center',

      marginTop: '20px',
      borderRadius: '50px',

      height: '50px',
      minWidth: '200px',
      border: ' 4px solid #000B4F ',
    },
    searchimg: {
      height: '100%',
      width: '10%',
      background: '#000B4F',
      color: 'white',
      padding: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      margin: '0',
      borderRadius: '25px 0 0 25px',
    },
    captainput: {
      border: 'none',
      background: 'transparent',
      margin: '4px',
      width: '90%',
      fontSize: '1rem',
      '&:focus-visible': {
        border: 'none',
        outline: 'none',
      },
      '&::placeholder': {
        color: 'darkblue',
      },
    },
    captaimg: {
      height: '100%',
      width: '23%',
      background: '#000B4F',
      color: 'white',
      padding: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      margin: '0',
      borderRadius: '25px 0 0 25px',
    },
    captabox: {
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'enter',
      borderRadius: '50px',
      marginTop: '20px',
      height: '50px',
      minWidth: '200px',
      border: ' 4px solid #000B4F ',
    },
    captatext: {
      background: '#000B4F',
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontSize: '1rem',
      justifyContent: 'center',
    },
    captatextbox: {
      background: '#000B4F',
      margin: '20px',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',

      justifyContent: 'center',
    },
    textarea: {
      border: 'none',
      background: 'transparent',
      margin: '4px',
      width: '100%',
      fontSize: '1rem',
      '&:focus-visible': {
        border: 'none',
        outline: 'none',
      },
      '&::placeholder': {
        color: 'darkblue',
      },
    },
    textareabox: {
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      marginTop: '20px',
      borderRadius: '20px',

      height: '5%',
      minWidth: '200px',
      border: ' 4px solid #000B4F ',
    },
    send: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'enter',
      border: ' 4px solid #000B4F ',
      marginTop: '20px',
      borderRadius: '50px',
      width: '100%',
      height: '50px',
      transition: '0.5s ease-out',
      '&:hover': {
        background: '#000B4F',
        color: 'white',
      },
    },
    sendtext: {
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    select: {
      background: 'transparent',
      width: '100%',
      height: '100%',
      border: ' 4px solid #000B4F ',
      borderRadius: '50px',
      '&:focus-visible': {
        outline: 'none',
      },
    },
    option: {
      border: ' 2px  solid #000B4F ',
      color: '#000B4F',
    },
    selectbox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px',
      width: '100%',
      height: '50px',
    },
  })
)

const ContactForm: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <Grid item sm={6} container justifyContent="center" alignItems="center"  >
        <Card className={classes.container}>
          <Typography className={classes.mainhead}>Contact Us</Typography>
          <Box className={classes.searchbox}>
            <FaUserAlt className={classes.searchimg} />
            <input className={classes.searchinput} placeholder="Nom" />
          </Box>
          <Box className={classes.searchbox}>
            <FaUserAlt className={classes.searchimg} />
            <input className={classes.searchinput} placeholder="Prénom" />
          </Box>
          <Box className={classes.searchbox}>
            <FaEnvelope className={classes.searchimg} />
            <input className={classes.searchinput} placeholder="Email" />
          </Box>
          <Grid container>
            <Grid item sm={12} md={6}>
              <Box className={classes.captabox}>
                <FaLock className={classes.captaimg} />

                <input className={classes.captainput} placeholder="Captcha" />
              </Box>
            </Grid>
            <Grid sm={12} md={12} lg={6}>
              <Box className={classes.captatextbox}>
                <Typography className={classes.captatext}>7272782</Typography>
              </Box>
            </Grid>
          </Grid>

          <Box className={classes.selectbox}>
            <select className={classes.select}>
              <option className={classes.option}>Question1</option>
              <option className={classes.option}>Question2</option>
              <option className={classes.option}>Question3</option>
              <option className={classes.option}>Question4</option>
            </select>
          </Box>
          <Box className={classes.textareabox}>
            <textarea className={classes.textarea} placeholder="message" rows={3} />
          </Box>

          <Box className={classes.send}>
            <Typography className={classes.sendtext}>Send</Typography>
          </Box>
        </Card>
      </Grid>
    </>
  )
}
export default ContactForm
