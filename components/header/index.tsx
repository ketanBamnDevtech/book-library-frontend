import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import styles from '@/styles/Home2.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';
import UseProfile from '@/hooks/profileHook';

function Header() {
  const router = useRouter();
  const { data } = UseProfile();

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
            <Link href="/mybook">My Book</Link>
          </li>
        </ul>
        {/* <div>
          <input type='text' className={styles.searchField} placeholder='Search here..'></input>
        </div> */}
        <div className={styles.navright}>
          <NotificationsIcon />
          {/* <MarkUnreadChatAltIcon />
          <EmailIcon />
          <Diversity3Icon /> */}
          <PersonIcon />
          <div className={styles.navUser}>
            Welcom back {data.user.name}!
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header