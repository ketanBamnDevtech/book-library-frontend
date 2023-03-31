import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from '@/styles/MyBook.module.css'
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DynamicLayout from '@/components/layout/dynamic'
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useMutation } from '@apollo/client';
import { MY_BOOKS_MUTATION, UPDATE_RATING_COLLECTIONS } from '@/gql/bookQueries';
import { useAppDispatch } from '@/hooks';
import { setMyBooks } from '@/store/slices/book.slice';
import { useRouter } from 'next/router';

function MyBook() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user }: any = useSelector((state: RootState) => state.user);
  const books: any = useSelector((state: RootState) => state.books);

  const [rating, setRating] = useState<number>(0);
  const [bookStatus, setBookStatus] = useState<string>("");
  const [bookId, setBookId] = useState<string>("");
  const [bookStastics, setbookStastics] = useState<any | object>({})
  const [getMyBooks, { loading: getLoading, error: addError, data }] = useMutation(MY_BOOKS_MUTATION);
  const [addToLibrary, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_RATING_COLLECTIONS);

  useEffect(() => {
    if (user.id) {
      getMyBooks({ variables: { userId: user.id } })
        .then(({ data }: any) => {
          dispatch(setMyBooks(data.myBooks.myLibrary))
        }).catch(error => {
          console.error(error);
        });
    }
  }, [getMyBooks, user.id, updateLoading]);

  
  useEffect(() => {
    if (bookId !== "") {
      changeHandler(bookStatus, rating);
    }
  }, [rating, bookStatus, bookId]);

  let calculateObjects = () => {
    if (books.myBooks.length) {
      const counts = books.myBooks.reduce((acc: any, book: any) => {
        const collect = book.collect;
        if (collect === "WANT_TO_READ") {
          acc.wantToRead += 1;
        } else if (collect === "READING") {
          acc.reading += 1;
        } else if (collect === "READ") {
          acc.read += 1;
        }
        return acc;
      }, { wantToRead: 0, reading: 0, read: 0 });
      setbookStastics(counts)
      return counts;
    }
  }

  useEffect(() => { calculateObjects() }, [getLoading, updateLoading])

  const changeHandler = (bookStatus: string, rating: number) => {
    addToLibrary({
      variables: {
        bookId: bookId,
        userId: user.id,
        collect: bookStatus,
        rating: rating
      },
    }).then(data => {
      // Handle success
    }).catch(error => {
      console.error(error);
      // Handle error
    });
  }

  return (
    <DynamicLayout isPrivate>
      <div className={styles.mybookheader}>
        <h1><a href="#">My Book</a></h1>
        <hr></hr>
      </div>
      <Grid container spacing={5} className={styles.mainContainer}>
        <Grid item xs={2} className={styles.mybookleft}>
          <h3 className={styles.lefttitle1}>Bookshelves <a href='#'>Edit</a></h3>
          <div className={styles.leftCrad}>
            <div>
              <a href='#'>All ({books?.myBooks?.length})</a>
            </div>
            <div>
              <a href='#'>Read ({bookStastics?.read ?? 0})</a>
            </div>
            <div>
              <a href='#'>Currently Reading ({bookStastics?.reading ?? 0})</a>
            </div>
            <div>
              <a href='#'>Want to Read ({bookStastics?.wantToRead ?? 0})</a>
            </div>
          </div>
          <hr></hr>
        </Grid>
        <Grid item xs={10} className={styles.booktable}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    cover</TableCell>
                  <TableCell align="left">title</TableCell>
                  <TableCell align="left">author</TableCell>
                  <TableCell align="left">avg rating</TableCell>
                  <TableCell align="left">rating</TableCell>
                  <TableCell align="left">shelves</TableCell>
                  {/* <TableCell align="left">review</TableCell> */}
                  {/* <TableCell align="left">date read</TableCell>
                  <TableCell align="left">date added</TableCell>
                  <TableCell align="left"></TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {books?.myBooks?.length && books?.myBooks?.map((row: any) => {
                  let { bookId }: any = row;
                  return (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">
                        <img
                          src='https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71-tsVwvG+L._AC_UL600_SR600,600_.jpg'
                          className={styles.bookimg} />
                      </TableCell>
                      <TableCell align="left">
                        {bookId.title}
                      </TableCell>
                      <TableCell align="left">
                        {bookId.author}{" "}*</TableCell>
                      <TableCell align="left">{row.rating}</TableCell>
                      <TableCell align="left">
                        <Rating
                          name="simple-controlled"
                          value={row.rating}
                          onChange={(event, newValue) => {
                            event.preventDefault();
                            setBookId(bookId.id)
                            setRating(newValue ?? 0);
                          }}
                        />
                      </TableCell>
                      <TableCell align="left">
                        {/* <a href='#'>
                          read, dfgf
                        <EditIcon /></a> */}

                        {/* <FormControl> */}
                        {/* <InputLabel id="collection-select">Select</InputLabel> */}
                        <Select
                          labelId="collection-select"
                          id="collection-select"
                          className={styles.myBookReadDropdown}
                          value={row.collect}
                          onChange={(event: any) => {
                            const newStatus = event.target.value as string;
                            setBookId(bookId.id)
                            setBookStatus(newStatus);
                          }}
                        >
                          <MenuItem value="WANT_TO_READ">to-read</MenuItem>
                          <MenuItem value="READING">currently-reading</MenuItem>
                          <MenuItem value="READ">read</MenuItem>
                        </Select>
                        {/* </FormControl> */}
                      </TableCell>
                      {/* <TableCell align="left"><a href='#'>Write a review</a></TableCell>
                      <TableCell align="left">not set<a href='#'><EditIcon /></a></TableCell>
                      <TableCell align="left">Mar 30, 2023</TableCell>
                      <TableCell align="left"><a href='#'><EditIcon /></a></TableCell> */}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </DynamicLayout>
  )
}

export default MyBook