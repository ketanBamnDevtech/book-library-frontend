import React from 'react'
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
import styles from '@/styles/Home2.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';
import UseProfile from '@/hooks/profileHook';


function Header() {
  const router = useRouter();
  const { data } = UseProfile();
  console.log('data ', data);
  return (
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">My Book</Link>
          </li>
          {/* <li>
            <a href='#'>Browse</a>
          </li> */}
          {/* <li>
            <a href='#'>Community</a>
          </li> */}
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
  )
}

export default Header