import React from 'react';
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import BookAppointment from './bookAppointmet';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    Links: {
        color: 'darkblue',
        fontSize: "1rem",
        fontWeight: 700,
        transition: '0.3s ease-out',
        '&:active , &:visited,&:hover': {
            borderBottom: '2px solid white',
            cursor: 'pointer'

        }
    },
    login: {
        background: "linear-gradient(94.61deg, #27AAE1 11.18%, #514DCC 99.98%)",
        padding: 10,
        width: 120,
        color: 'white',
        display: 'grid',
        placeItems: 'center',
        borderRadius: '.5rem',
        cursor: 'pointer'

    },
    menub: {
        color: 'white'
    },
    menubox: {

    }
});
interface Props {
    navcolor: string
}

const SwipeableTemporaryDrawer: React.FC<Props> = (props) => {

    const [state, setState] = React.useState(false);
    const classes = useStyles()
    const toggleDrawer = (open: boolean) => setState(open)

    return (
        <div>

            <React.Fragment >
                <Box className={classes.menubox} pt={2}>
                    <AiOutlineMenu onClick={() => toggleDrawer(true)} className={classes.menub} size={32}></AiOutlineMenu>
                </Box>

                <SwipeableDrawer open={state} onClose={() => toggleDrawer(false)} onOpen={() => toggleDrawer(true)} >
                    <Box p={2} >
                        <Link href="/services" passHref >
                            <Box className={classes.Links} style={{ color: props.navcolor }} >
                                Services
                            </Box>
                        </Link>
                    </Box>

                    <Box p={2} >
                        <Link href="/Showcase">
                            <Box className={classes.Links} style={{ color: props.navcolor }}>
                                Showcase
                            </Box>
                        </Link>
                    </Box>

                    <Box p={2} >
                        <Link href="/Deals">
                            <Box className={classes.Links} style={{ color: props.navcolor }}>
                                Deals
                            </Box>
                        </Link>
                    </Box>

                    <BookAppointment />

                    <Box p={2}>
                        <Link href="/Login">
                            <Box className={classes.login} style={{ color: props.navcolor }} >
                                Log In
                            </Box>
                        </Link>

                    </Box>
                </SwipeableDrawer>
            </React.Fragment>

        </div>
    );
}
export default SwipeableTemporaryDrawer
