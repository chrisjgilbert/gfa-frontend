import Container from "../containers/Container";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
