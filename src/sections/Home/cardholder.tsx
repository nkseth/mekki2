import React from 'react';
import { Box, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import andios from '../../asserts/andios.png'
import globe from '../../asserts/globe.png'
import gshop from '../../asserts/gshop.png'
import instabook from '../../asserts/instabook.png'
import trendingicon from '../../asserts/trendingicon.png'
import youword from '../../asserts/youword.png'
import Cards from '../../components/cards'



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: "100vw",
            marginTop: "10%",
            filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.322))",

            padding: '0px 17%',
            [theme.breakpoints.down("sm")]: {
                padding: '0px 7%',
            }

        },
        innerGrid: {
            marginTop: '10%'
        }


    }),
);
const CardHolder: React.FC = () => {

    const data = [{ title: "Facebook or Instagram Ads", subtitel: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', icons: instabook, link: "Services#facebookads" },
    { title: "Seo", subtitel: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', icons: trendingicon, link: "Services#seo" },
    { title: "Website", subtitel: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', icons: globe, link: "Services#websites" },
    { title: "Youtube and google Ads", subtitel: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', icons: youword, link: "Services#youtubeandgoogleads" },
    { title: "Google my Business", subtitel: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', icons: gshop, link: "Services#googlemybusiness" },
    { title: "Mobile Apps", subtitel: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', icons: andios, link: "Services#mobileapps" },

    ]
    const classes = useStyles();

    return (

        <Grid justify="center" alignItems="center" container className={classes.root}  >


            {data.map((item, index) => {
                return (
                    <Grid key={index} item sm={12} lg={4} md={6} justifyContent="center" alignItems="center" container className={classes.innerGrid} >

                        <Box px={2} py={4}  >
                            <Cards title={item.title} subheading={item.subtitel} icons={item.icons} link={item.link} />
                        </Box>
                    </Grid>
                )
            })}



        </Grid >

    );
}
export default CardHolder