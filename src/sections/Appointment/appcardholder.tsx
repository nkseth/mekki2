import React from 'react';
import { Box, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import key from '../../asserts/key.png'
import Cards from '../../components/appcard'



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

            marginTop: "10%",

            padding: '0px 10%',
            [theme.breakpoints.down("sm")]: {
                padding: '0px 7%',
            }

        },
        innerGrid: {
            marginTop: '10%'
        },
        mainhead: {
            fontSize: '3rem',
            letterSpacing: '.75rem',
            fontFamily: "Roboto",
            fontWeight: 700,
            transform: "scale(1, 1.5)",
            color: '#162183',
            marginTop: "3rem",
            [theme.breakpoints.down("sm")]: {
                fontSize: '1.5rem',
                letterSpacing: '1rem',
                marginTop: "1rem"
            },

        },


    }),
);

const CardHolder: React.FC = () => {

    const data = [{ subtitel: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', icons: key },
    { subtitel: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', icons: key },
    { subtitel: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', icons: key },


    ]
    const classes = useStyles();

    return (

        <Grid justify="center" alignItems="center" container className={classes.root}  >

            <Grid item sm={12} container justify="center" alignItems="center"   >
                <Typography className={classes.mainhead} variant="h4" >Strategic Coaching In 3 Key Steps</Typography>

            </Grid>
            {data.map((item) => {
                return (
                    <Grid item sm={12} lg={4} md={6} justify="center" alignItems="center" container className={classes.innerGrid} >
                        <Box px={2} py={4}  >
                            <Cards subheading={item.subtitel} icons={item.icons} />
                        </Box>
                    </Grid>
                )
            })}



        </Grid >

    );
}
export default CardHolder