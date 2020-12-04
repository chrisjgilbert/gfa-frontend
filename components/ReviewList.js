import ReviewListItem from "./ReviewListItem";

const ReviewList = ({ data }) => {
  return (
    <ul>
      {data.map((review) => (
        <ReviewListItem key={review.id} {...review.attributes} />
      ))}
    </ul>
  );
};

export default ReviewList;
