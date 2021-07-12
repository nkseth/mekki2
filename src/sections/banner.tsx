import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Header from '../components/header'
import Path3 from './svgs/path3'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      top: 0,
      left: 0,

    },
    bg: {
      maxWidth: '100vw',
      width: '100vw',

      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: -1,
      backgroundColor: 'green',
    },
    img: {
      width: '100vw',
    },
  })
)

const Banner: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header navcolor="darkblue" />
      <Path3 />
    </div>
  )
}
export default Banner
