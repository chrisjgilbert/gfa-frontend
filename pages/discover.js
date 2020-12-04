import Layout from "../components/Layout";
import TopRestaurants from "../components/TopRestaurants";

const Discover = ({ eateries }) => {
  return (
    <Layout>
      <TopRestaurants eateries={eateries} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:8080/api/eateries");
  const json = await response.json();

  return {
    props: {
      eateries: json.data,
    },
  };
}

export default Discover;
