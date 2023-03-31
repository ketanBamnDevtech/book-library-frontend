import React from 'react'
import styles from '@/styles/Home3.module.css'

import LinearProgress from '@mui/material/LinearProgress';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import EmailIcon from '@mui/icons-material/Email';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
function MyBook() {
    const [value, setValue] = React.useState(2);

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];




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
                    <div className={styles.navleft}>
                        <NotificationsIcon />
                        <MarkUnreadChatAltIcon />
                        <EmailIcon />
                        <Diversity3Icon />
                        <PersonIcon />

                    </div>
                </div>
            </header>
            <div className={styles.mybookheader}>
                <h1><a href="#">My Book</a></h1>
                <hr></hr>
            </div>
            <Grid container spacing={5} className={styles.mainContainer}>

                <Grid item xs={2} className={styles.mybookleft}>
                    <h3 className={styles.lefttitle1}>Bookshelves <a href='#'>Edit</a></h3>
                    <div className={styles.leftCrad}>

                        <div>
                            <a href='#'>All (1)</a>
                        </div>
                        <div>
                            <a href='#'>Read (1)</a>
                        </div>
                        <div>
                            <a href='#'>Currently Reading (0)</a>
                        </div>
                        <div>
                            <a href='#'>Want to Read (0)</a>
                        </div>
                    </div>
                    <hr></hr>
                    <div className={styles.leftCrad}>

                        <div>
                            <a href='#'>vishal (1)</a>
                        </div>
                        <div>
                            <button className={styles.AddshelfBtn}>Add shelf</button>
                        </div>

                    </div>
                </Grid>
                <Grid item xs={10} className={styles.booktable}>
                    <TableContainer component={Paper}>
                        <Table  aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
cover</TableCell>
                                    <TableCell align="left">	title</TableCell>
                                    <TableCell align="left">	author</TableCell>
                                    <TableCell align="left">avg rating</TableCell>
                                    <TableCell align="left">rating</TableCell>
                                    <TableCell align="left">shelves</TableCell>
                                    <TableCell align="left">review</TableCell>
                                    <TableCell align="left">date read</TableCell>
                                    <TableCell align="left">date added</TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">       <img src='https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71-tsVwvG+L._AC_UL600_SR600,600_.jpg' className={styles.bookimg}></img>
                        </TableCell>
                                        <TableCell align="left"><a href='#'>	
Good-bye Stacey, Good-bye</a></TableCell>
                                        <TableCell align="left"><a href='#'>	
                                        Epstein, Gabriela *</a></TableCell>
                                        <TableCell align="left">4.31</TableCell>
                                        <TableCell align="left"> <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue ?? 0);
                                        }}
                                    /></TableCell>
                                        <TableCell align="left">
                                        <a href='#'>		
read, dfgf
<EditIcon /></a>
                                        </TableCell>
                                        <TableCell align="left"><a href='#'>Write a review</a></TableCell>
                                        <TableCell align="left">not set<a href='#'><EditIcon /></a></TableCell>
                                        <TableCell align="left">Mar 30, 2023</TableCell>
                                        <TableCell align="left"><a href='#'><EditIcon /></a></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>



                </Grid>
            </Grid>

        </div >
    )
}

export default MyBook