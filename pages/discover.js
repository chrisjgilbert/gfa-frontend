import Layout from "../components/Layout";
import TopRestaurants from "../components/TopRestaurants";
import Location from "../components/Location";
import RestaurantFilters from "../components/RestaurantFilters";

const Discover = ({ eateries }) => {
  return (
    <Layout>
      <Location />
      <RestaurantFilters />
      <TopRestaurants eateries={eateries} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const response = await fetch("http://localhost:8080/api/eateries");
  const json = await response.json();

  return {
    props: {
      eateries: json.data,
    },
  };
}

export default Discover;
