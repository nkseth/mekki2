import React from 'react';
import { Box, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import jhon from '../../asserts/jhon.png'
import Cards from '../../components/aboutcards'



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
        },
        mainhead: {
            fontSize: '3rem',
            letterSpacing: '1rem',
            fontFamily: "Roboto",
            fontWeight: 700,
            padding: '0% 10%',
            transform: "scale(1, 1.5)",
            color: '#01246D',
            marginTop: "1rem",

            [theme.breakpoints.down("sm")]: {
                fontSize: '1.5rem',
                letterSpacing: '1rem',
                marginTop: "1rem"
            }
        },


    }),
);

const AboutTeam: React.FC = () => {

    const data = [{ title: "JHONNEY", subtitel: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', icons: jhon },
    { title: "JHONNEY", subtitel: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', icons: jhon },
    { title: "JHONNEY", subtitel: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', icons: jhon },

    ]
    const classes = useStyles();

    return (

        <Grid justifyContent="center" alignItems="center" container className={classes.root}  >
            <Grid item sm={12} container justifyContent="center" alignItems="center" >
                <Typography className={classes.mainhead}>Team</Typography>

            </Grid>

            {data.map((item) => {
                return (
                    <Grid item sm={12} lg={4} md={6} justifyContent="center" alignItems="center" container className={classes.innerGrid} >

                        <Box px={2} py={4}  >
                            <Cards title={item.title} subheading={item.subtitel} icons={item.icons} />
                        </Box>
                    </Grid>
                )
            })}



        </Grid >

    );
}
export default AboutTeam