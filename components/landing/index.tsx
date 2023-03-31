import React from 'react'
import Box from '@mui/material/Box';
import styles from '@/styles/Home2.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';

function LandingPage() {
  const router = useRouter();
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
        <button className={styles.landingSignupBTN}
          onClick={() => {
            router.push("/signup")
          }}>Sign up with email</button>
        <p>By creating an account, you agree to the Goodreads <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></p>
        <hr></hr>
        <p>Already a member?
          <Link href='/signin'>Sign in</Link>
        </p>
      </Box>
    </div>
  )
}

export default LandingPage
