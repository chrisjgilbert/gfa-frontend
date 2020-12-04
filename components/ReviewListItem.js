const ReviewListItem = ({
  content,
  rating,
  glutenFreeRange,
  value,
  service,
}) => {
  return (
    <li>
      <h4>Rating: {rating}</h4>
      <h5>Gluten free options: {glutenFreeRange}</h5>
      <h5>Value: {value}</h5>
      <h5>Value: {service}</h5>
      <p>Service: {content}</p>
    </li>
  );
};

export default ReviewListItem;
