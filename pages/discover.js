import { useState } from "react";

import Layout from "../layouts/Layout";

import RestaurantFilters from "../components/RestaurantFilters";
import TopRestaurants from "../components/TopRestaurants";
import Location from "../components/Location";

const Discover = (props) => {
  const [eateries, setEateries] = useState(props.eateries);
  const [filter, setFilter] = useState();

  const handleFilterChange = (e) => {
    const value = e.target.value;
    const selectedFilter = value === filter ? null : value;
    setFilter(selectedFilter);
    fetchEateries(selectedFilter);
  };

  const fetchEateries = async (filter) => {
    const url = filter
      ? `${EATERIES_ENDPOINT}?cuisine=${filter}`
      : EATERIES_ENDPOINT;
    const response = await fetch(url);
    const json = await response.json();
    setEateries(json.data);
  };

  return (
    <Layout>
      <Location />
      <RestaurantFilters
        handleFilterChange={handleFilterChange}
        currentFilter={filter}
      />
      <TopRestaurants eateries={eateries} />
    </Layout>
  );
};

const EATERIES_ENDPOINT = "http://localhost:8000/api/eateries";

export async function getServerSideProps() {
  const response = await fetch(EATERIES_ENDPOINT);
  const json = await response.json();

  return {
    props: {
      eateries: json.data,
    },
  };
}

export default Discover;
