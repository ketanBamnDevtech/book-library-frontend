import React from 'react'

import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import EmailIcon from '@mui/icons-material/Email';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import styles from '@/styles/Home2.module.css'
function LandingPage() {
  return (
    <div className={styles.landing}>
      
      <header className={styles.Navbar}>
                <div className={styles.Toolbar}>
                    <div className={styles.Logo}>
                        {" "}
                        <span role="img" aria-label="logo" className={styles.logoname}>
                            Good<strong>Reads</strong>
                        </span>{" "}
                    </div>
                   
                </div>
            </header>
            <img src='https://s.gr-assets.com/assets/home/homepage_promos/reading_challenge_2023/HomepageMasthead_Desktop.png' className={styles.landingbanner}></img>
    <Box className={styles.landingbox}>
        <h2 className={styles.landingTitle}>Discover & read more</h2>
        <button className={styles.landingSignupBTN}>Sign up with email</button>
        <p>By creating an account, you agree to the Goodreads <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></p>
        <hr></hr>
        <p>Already a member? <a href="#">Sign In</a></p>
    </Box>
    </div>
  )
}

export default LandingPage
