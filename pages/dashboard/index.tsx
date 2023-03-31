import React, { useEffect, useState } from 'react'
import DynamicLayout from '@/components/layout/dynamic'
import { GET_ALL_BOOKS, UPDATE_RATING_COLLECTIONS } from '@/gql/bookQueries';
import { client } from '@/gql';
import { GetServerSideProps } from 'next';
import BookList from '@/components/allBooks';
// import styles from '@/styles/Header.module.css'
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
import { useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useRouter } from 'next/router';
// import { Form } from 'formik';
// import { setBooks } from '@/store/slices/book.slice';
// import { useAppDispatch } from '@/hooks';

interface dashboardProps {
  data: object | any
}

function DashBoard({ data }: dashboardProps) {
  const { books } = data?.allBooks;
  const router = useRouter();
  const [rating, setRating] = useState<number>(0);
  const [bookStatus, setBookStatus] = useState<string>("");
  const [bookId, setBookId] = useState<string>("");
  const userInfo: any = useSelector((state: RootState) => state.user);
  const [addToLibrary, { loading, error }] = useMutation(UPDATE_RATING_COLLECTIONS);

  console.log('loading when adding books', loading, error)

  useEffect(() => {
    if(bookId !== ""){
      changeHandler(bookStatus, rating);
    }
  }, [rating, bookStatus, bookId])

  const changeHandler = (bookStatus: string, rating: number) => {
    addToLibrary({
      variables: {
        bookId: bookId,
        userId: userInfo.user.id,
        collect: bookStatus,
        rating: rating
      },
    }).then(data => {
      console.log('after updating data ', data);
      // Handle success
    }).catch(error => {
      console.error(error);
      // Handle error
    });
  }

  const refreshData = () => {
    router.replace(router.asPath);
  }

  return (
    <DynamicLayout isPrivate>
      <Grid container spacing={5} className={styles.mainContainer}>
        <Grid item xs={4}>
          <div className={styles.bookcard}>

            <Grid item xs={9}>
              <h3 className={styles.lefttitle1}>BOOKSHELVES</h3>
              <div>
                <a href='#' className={styles.Recommen}>0 Want to Read</a>
              </div><div>
                <a href='#' className={styles.Recommen}>0 Currently Reading</a>
              </div><div>
                <a href='#' className={styles.Recommen}>0 Read</a>
              </div>
            </Grid>
            {/* </Grid> */}
          </div>
          {/* recommmendations  */}
          {/* <h3 className={styles.lefttitle1}>CURRENTLY READING</h3>
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
          <hr></hr> */}

          {/* reading challanges */}
          {/* <h3 className={styles.lefttitle1}>2023 READING CHALLENGE</h3>
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
          </div> */}
        </Grid>
        <Grid item xs={8}>
          <div className={styles.rightCard}>
            <p>Welcome to Goodreads</p>
            <p>Meet your favorite book, find your reading community, and manage your reading life.</p>

          </div>
          {books?.map((book: any, index: number) => {
            {console.log('book data', book )}
            return (
              <div className={styles.bookcard} key={book.id}>
                <Grid container spacing={1}>
                  <Grid item xs={3} className={styles.bookimgmain}>
                    <img
                      // src='https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71-tsVwvG+L._AC_UL600_SR600,600_.jpg'
                      src={"book-library-backend/src/uploads" + "/" + book.coverImage}
                      className={styles.bookimg}></img>
                  </Grid>

                  <Grid item xs={9} >
                    {/* <p>Trending this week in one of your favorite genres, <a href="#" className={styles.Recommen}><strong>Graphic Novels</strong></a></p> */}
                    <h3 className={styles.title}><a href="#" className={styles.Recommen}>{book.title}</a></h3>
                    <a href='#'>by {book.author}</a>
                    <Box className={styles.ratingBox}>
                      <FormControl className={styles.readdropdown}>
                        <InputLabel id="demo-simple-select-label">Select</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={book.collect}
                          onChange={(event: any) => {
                            const newStatus = event.target.value as string;
                            setBookId(bookId)
                            setBookStatus(newStatus);
                          }}
                        >
                          <MenuItem value="WANT_TO_READ">Want to Read</MenuItem>
                          <MenuItem value="READING">Currently Reading</MenuItem>
                          <MenuItem value="READ">Read</MenuItem>
                        </Select>
                      </FormControl>
                      <a href='#'>Rate it:</a>
                      <Rating
                        name="simple-controlled"
                        value={book.avgRating}
                        onChange={(event, newValue) => {
                          event.preventDefault();
                          setBookId(book.id)
                          setRating(newValue ?? 0);
                        }}
                      />
                    </Box>
                    {/* <p>Stacey McGill is moving back to New York! That means no more Stoneybrook Middle School, no more Charlotte Johanssen, and worst of all... no more Baby-sitters Club. Stacey's fr<a href="">…Continue reading</a></p> */}
                  </Grid>
                </Grid>
              </div>
            )
          })}
        </Grid>
        {/* <div className={styles.rightCard1}>

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
        </div> */}
      </Grid>
    </DynamicLayout>
  )
}

export const getServerSideProps: GetServerSideProps<any> = async (context: any) => {
  // Fetch data from external API
  await client.query({
    query: GET_ALL_BOOKS
  });

  const { data } = await client.query({
    query: GET_ALL_BOOKS,
  });

  return {
    props: {
      data,
    },
  };
}

export default DashBoard;

