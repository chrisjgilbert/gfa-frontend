import ReviewListItem from "./ReviewListItem";

const ReviewList = ({ data }) => {
  return (
    <section>
      <h2>Reviews ({data.length})</h2>
      <ul>
        {data.map((review) => (
          <ReviewListItem key={review.id} {...review.attributes} />
        ))}
      </ul>
    </section>
  );
};

export default ReviewList;
