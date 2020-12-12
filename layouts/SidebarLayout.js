import Header from "../components/Header";
import Footer from "../components/Footer";

import Container from "../containers/Container";

import styles from "./SidebarLayout.module.css";

const SidebarLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <div className={styles.container}>{children}</div>
      </Container>
      <Footer />
    </>
  );
};

export default SidebarLayout;
