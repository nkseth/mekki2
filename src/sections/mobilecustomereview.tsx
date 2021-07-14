import React from 'react'
import { Grid, Typography, Hidden } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Carousel from 'react-material-ui-carousel'
import Revi from '../components/Reviews/reviews'
import MReviw from '../components/Reviews/mobilereview'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100vw',
            marginTop: '10%',
            display: 'grid',
            placeItems: 'center',
            overflow: 'hidden',
        },

        mainhead: {
            fontSize: '4rem',
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

        GridContainer: {
            width: '100%',
        },
    })
)

const Review: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container className={classes.GridContainer} spacing={5}>
                <Grid item sm={12} container justifyContent="center" alignItems="center">
                    <Typography className={classes.mainhead} variant="h4">
                        Customer Review
                    </Typography>
                </Grid>

                <Grid item sm={12} container justifyContent="center" alignItems="flex-start">
                    <Carousel autoPlay>


                        <MReviw type={1} />

                        <MReviw type={2} />
                        <MReviw type={3} />
                        <MReviw type={1} />
                        <MReviw type={1} />

                    </Carousel>
                </Grid>
            </Grid>
        </div>
    )
}
export default Review
