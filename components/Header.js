import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { UserContext } from "../contexts/userContext";

import styles from "./Header.module.css";

const Header = () => {
  const { user, logout } = useContext(UserContext);

  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    router.reload();
  };

  const username = () => {
    console.log(user);
    if (user?.username) {
      return <p>Hi, {user.username}!</p>;
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <span>Gluten Free Advisor</span>
        {username()}
        <nav className={styles.nav}>
          <ul>
            <li>Discover</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul>
            {user ? (
              <li onClick={handleLogout}>
                <a href="">Logout</a>
              </li>
            ) : (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
