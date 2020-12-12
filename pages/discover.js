import SidebarLayout from "../layouts/SidebarLayout";

import TopRestaurants from "../components/TopRestaurants";
import Location from "../components/Location";
import RestaurantFilters from "../components/RestaurantFilters";
import Container from "../containers/Container";

const Discover = ({ eateries }) => {
  return (
    <>
      <Container>
        <Location />
      </Container>
      <SidebarLayout>
        <RestaurantFilters />
        <TopRestaurants eateries={eateries} />
      </SidebarLayout>
    </>
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
