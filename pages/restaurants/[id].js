import Layout from "../../components/Layout";
import RestaurantBrief from "../../components/RestaurantBrief";
import ReviewList from "../../components/ReviewList";

const Restaurant = ({ eatery, reviews }) => {
  return (
    <Layout>
      <RestaurantBrief {...eatery} />
      <ReviewList {...reviews} />
    </Layout>
  );
};

export async function getStaticPaths() {
  // get all restaurants
  const response = await fetch("http://localhost:8080/api/eateries");
  const restaurants = await response.json();

  // Get the paths we want to pre-render based on restaurants
  const paths = restaurants.data.map(
    (restaurant) => `/restaurants/${restaurant.id}`
  );

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const eateryResponse = await fetch(
    `http://localhost:8080/api/eateries/${id}`
  );
  const reviewsResponse = await fetch(
    `http://localhost:8080/api/eateries/${id}/reviews`
  );
  const eateryJson = await eateryResponse.json();
  const reviewsJson = await reviewsResponse.json();

  return {
    props: {
      eatery: eateryJson.data.attributes,
      reviews: reviewsJson,
    },
  };
}

export default Restaurant;
