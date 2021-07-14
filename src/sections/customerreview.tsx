import React from 'react'
import { Grid, Typography, Hidden } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Carousel from 'react-material-ui-carousel'
import Revi from '../components/Reviews/reviews'
import Boxtype1 from '@src/components/Reviews/boxtype1'
import Boxtype2 from '@src/components/Reviews/boxtype2'
import Boxtype3 from '@src/components/Reviews/boxtype3'

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
    cour: {
      minHeight: 400
    }
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
          <Hidden mdDown>
            <Carousel autoPlay >


              <Revi boxt1={{ url: "", name: "Nanak Seth", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut " }}
                boxt11={{ url: "", name: "Nanak Seth", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut " }}
                boxt111={{ url: "", name: "Nanak Seth", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut " }}
                boxt1111={{ url: "", name: "Nanak Seth", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut " }}
                boxt2={{ url: "https://www.youtube.com/watch?v=y_RHQ4mBDKA&list=RDbbbgGRsCGv8&index=6&ab_channel=T-Series" }}
                boxt22={{ url: "https://www.youtube.com/watch?v=y_RHQ4mBDKA&list=RDbbbgGRsCGv8&index=6&ab_channel=T-Series" }}
                boxt222={{ url: "https://www.youtube.com/watch?v=y_RHQ4mBDKA&list=RDbbbgGRsCGv8&index=6&ab_channel=T-Series" }}
                boxt3={{ url: "https://ia600207.us.archive.org/29/items/MLKDream/MLKDream_64kb.mp3", name: "Nanak seth", aurl: "" }}
                boxt33={{ url: "https://ia600207.us.archive.org/29/items/MLKDream/MLKDream_64kb.mp3", name: "Nanak seth", aurl: "" }}
              />

              <Revi boxt1={{ url: "", name: "Nanak Seth", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut " }}
                boxt11={{ url: "", name: "Nanak Seth", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut " }}
                boxt111={{ url: "", name: "Nanak Seth", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut " }}
                boxt1111={{ url: "", name: "Nanak Seth", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut " }}
                boxt2={{ url: "https://www.youtube.com/watch?v=y_RHQ4mBDKA&list=RDbbbgGRsCGv8&index=6&ab_channel=T-Series" }}
                boxt22={{ url: "https://www.youtube.com/watch?v=y_RHQ4mBDKA&list=RDbbbgGRsCGv8&index=6&ab_channel=T-Series" }}
                boxt222={{ url: "https://www.youtube.com/watch?v=y_RHQ4mBDKA&list=RDbbbgGRsCGv8&index=6&ab_channel=T-Series" }}
                boxt3={{ url: "https://ia600207.us.archive.org/29/items/MLKDream/MLKDream_64kb.mp3", name: "Nanak seth", aurl: "" }}
                boxt33={{ url: "https://ia600207.us.archive.org/29/items/MLKDream/MLKDream_64kb.mp3", name: "Nanak seth", aurl: "" }}
              />


            </Carousel>
          </Hidden>
          <Hidden smUp>
            <Carousel autoPlay >
              <Boxtype1 url="" name="Nanak Seth" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut " />

              <Boxtype2 url="https://www.youtube.com/watch?v=y_RHQ4mBDKA&list=RDbbbgGRsCGv8&index=6&ab_channel=T-Series" />

              <Boxtype3 url="https://ia600207.us.archive.org/29/items/MLKDream/MLKDream_64kb.mp3" name="Nanak seth" aurl="" />






            </Carousel>
          </Hidden>

        </Grid>
      </Grid>
    </div>
  )
}
export default Review
