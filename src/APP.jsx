import React,{useState} from "react";
import {Typography, AppBar, CardMedia, Grid, Button, Toolbar, Container, CssBaseline, Box, Link, TextField} from "@mui/material";
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";
import useStyles from "./AppStyles";


function APP(){

    const commands=["*"];
    const {transcript}=useSpeechRecognition({commands});

    const classes=useStyles();

    return(
        <>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative" color="inherit">
            <Toolbar>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} align="center">
                    Learn Words
                </Typography>
            </Toolbar>
        </AppBar>
        </Box>
        <main>
            <div className={classes.container}>
                <Container>
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={12} xl={6} lg={6}>
                                <CardMedia 
                                    component='iframe'
                                    src="https://www.youtube.com/embed/59Z52tMFDhk"
                                    alt="clayVideos"
                                    height= "360"
                                    width= "auto"
                                    frameborder="0" 
                                    allowfullscreen="allowfullscreen"                      
                                />
                            </Grid>                          
                            <Grid item xs={12} xl={6} lg={6}>
                                <Typography variant="body2" color="inherit" gutterBottom>
                                    CLAY:
                                </Typography>
                                <Typography variant="body2" color="inherit">
                                    Clay is a soft, loose earthy material containing particles.
                                </Typography>
                                <Typography variant="body2" color="inherit" gutterBottom>
                                    Now lets learn the spelling of CLAY:
                                </Typography>
                                <Typography variant="body2" color="inherit" gutterBottom>
                                    It is Spelled as : C L A Y
                                </Typography>
                                <Typography variant="body2" color="inherit" gutterBottom>
                                    Try to spell it:   
                                </Typography>
                                <Button sx={{marginRight:2, marginTop:1}} onClick={SpeechRecognition.startListening} variant="contained" >Start</Button>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" value={transcript} onChange={event => this.onInputChange(event.target.value)} />
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </main>
        <footer className={classes.footer}>
            <Typography variant="h4" align="center" gutterBottom>
                Play Area
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" >
                Copyright ⓒ <Link href="#" color="inherit">Website</Link> 2022
            </Typography>
        </footer>
        </>
    );
}


export default APP;

