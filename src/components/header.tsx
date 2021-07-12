/* eslint-disable react/prop-types */
import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Logo from '../asserts/g10 3.png'
import Navoptions from './navoptions'
import { Hidden } from '@material-ui/core'
import Drawer from '../components/sidedrawer'
import Link from 'next/link'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',

      position: 'absolute',
      top: 0,
      left: 0,
      padding: '0% 5%',
      minWidth: '100%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appbar: {
      width: '100%',
    },
    logo: {
      maxWidth: 150,
      margin: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        maxWidth: 75,
      },
    },
  })
)
interface Props {
  navcolor: string
}

const Header: React.FC<Props> = ({ navcolor }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Link href="/">
        <img src={Logo} className={classes.logo} alt="logo" />
      </Link>

      <Hidden mdDown>
        <Navoptions navcolor={navcolor} />
      </Hidden>
      <Hidden smUp>
        <Drawer navcolor="darkblue" />
      </Hidden>

    </div>
  )
}
export default Header
