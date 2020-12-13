import Layout from "../layouts/Layout";

import TopRestaurants from "../components/TopRestaurants";
import Location from "../components/Location";
import Container from "../containers/Container";

const Discover = ({ eateries }) => {
  return (
    <>
      <Container>
        <Location />
      </Container>
      <Layout>
        <TopRestaurants eateries={eateries} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  console.log("CONTEXT****");
  console.log(context);
  const response = await fetch("http://localhost:8080/api/eateries");
  const json = await response.json();

  return {
    props: {
      eateries: json.data,
    },
  };
}

export default Discover;
