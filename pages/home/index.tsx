import React from 'react'
import styles from '@/styles/Home2.module.css'

import LinearProgress from '@mui/material/LinearProgress';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import EmailIcon from '@mui/icons-material/Email';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Form } from 'formik';

function HomePage() {

    const [value, setValue] = React.useState(2);
    return (
        <div>
            <header className={styles.Navbar}>
                <div className={styles.Toolbar}>
                    <div className={styles.Logo}>
                        {" "}
                        <span role="img" aria-label="logo" className={styles.logoname}>
                            Good<strong>Reads</strong>
                        </span>{" "}
                    </div>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>My Books</a>
                        </li>
                        <li>
                            <a href='#'>Browse</a>
                        </li>
                        <li>
                            <a href='#'>Community</a>
                        </li>
                    </ul>
                    <div>
                        <input type='text' className={styles.searchField} placeholder='Search here..'></input>
                    </div>
                    <div className={styles.navright}>
                        <NotificationsIcon />
                        <MarkUnreadChatAltIcon />
                        <EmailIcon />
                        <Diversity3Icon />
                        <PersonIcon />

                    </div>
                </div>
            </header>
            <Grid container spacing={5} className={styles.mainContainer}>

                <Grid item xs={4}>
                    <h3 className={styles.lefttitle1}>CURRENTLY READING</h3>
                    <div className={styles.leftCrad}>
                        <div className={styles.readingCard}>
                            <div className={styles.icon}><ImportContactsIcon /></div><p>What are you reading?</p></div>

                        <div>
                            <input type='text' className={styles.BooksearchField} placeholder='Search here..'></input>
                        </div>
                        <div>
                            <a href='#' className={styles.Recommen}>Recommendations</a>
                            <a href='#' className={styles.Recommen}>General update</a>
                        </div>
                    </div>
                    <hr></hr>
                    <h3 className={styles.lefttitle1}>2023 READING CHALLENGE</h3>
                    <div className={styles.leftCrad}>
                        <div className={styles.readingCard}>
                            <div className={styles.icon}><ImportContactsIcon /></div>
                            <div className={styles.readingChallengeMain}>
                                <h2 className={styles.noofcount}>1</h2>
                                <p>books completed</p>
                                <span className={styles.track}>You’re on track!</span>
                            </div>
                        </div>

                        <div>

                            <LinearProgress color="success" variant="determinate" value={10} />
                        </div>
                        <div>
                            <a href='#' className={styles.Recommen}>View Challenge</a>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className={styles.rightCard}>
                        <p>Welcome to Goodreads</p>
                        <p>Meet your favorite book, find your reading community, and manage your reading life.</p>

                    </div>
                    <div className={styles.bookcard}>
                        <Grid container spacing={1}>

                            <Grid item xs={3} className={styles.bookimgmain}>
                                <img src='https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71-tsVwvG+L._AC_UL600_SR600,600_.jpg' className={styles.bookimg}></img>
                            </Grid>
                            <Grid item xs={9}>

                                <p>Trending this week in one of your favorite genres, <a href="#" className={styles.Recommen}><strong>Graphic Novels</strong></a></p>
                                <h3 className={styles.title}><a href="#" className={styles.Recommen}>Good-bye Stacey, Good-bye</a></h3>
                                <a href='#'>by Gabriela Epstein</a>
                                <Box className={styles.ratingBox}>
                                    <Form>
                                        <FormControl className={styles.readdropdown} mr={1} >
                                            <InputLabel id="demo-simple-select-label">Want to Read</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select">
                                                <MenuItem value={10}>Want to Read</MenuItem>
                                                <MenuItem value={20}>Currently Reading</MenuItem>
                                                <MenuItem value={30}>Read</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Form>

                                    <a href='#' mr={1}>Rate it:</a>
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue ?? 0);
                                        }}
                                    />
                                </Box>
                                <p>Stacey McGill is moving back to New York! That means no more Stoneybrook Middle School, no more Charlotte Johanssen, and worst of all... no more Baby-sitters Club. Stacey's fr<a href="">…Continue reading</a></p>
                            </Grid>
                        </Grid>
                    </div>


                </Grid>
                <div className={styles.rightCard1}>

                    <Grid container spacing={5}>

                        <Grid item xs={6}>
                            <h3 className={styles.lefttitle1}>WANT TO READ</h3>
                            <div className={styles.leftCrad}>
                                <div className={styles.readingCard}>
                                    <div className={styles.icon}><ImportContactsIcon /></div><p>What do you want to read next?
                                    </p></div>

                                <div>
                                    <a href='#' className={styles.Recommen}>Recommendations</a>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <h3 className={styles.lefttitle1}>BOOKSHELVES</h3>
                            <div>
                                <a href='#' className={styles.Recommen}>0 Want to Read</a>
                            </div><div>
                                <a href='#' className={styles.Recommen}>0 Currently Reading</a>
                            </div><div>
                                <a href='#' className={styles.Recommen}>0 Read</a>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>

        </div >
    )
}

export default HomePage 
