import Image from "next/image";

const ReviewListItem = ({
  user,
  date,
  content,
  rating,
  glutenFreeRange,
  value,
  service,
}) => {
  return (
    <li>
      <div className="image__container">
        <Image src="/user-avatar.png" width="48" height="48" />
      </div>
      <h3>Review by {user}</h3>
      <h4>Rating: {rating}</h4>
      <h5>Visited on {date}</h5>
      <p>Gluten free options: {glutenFreeRange}</p>
      <p>Value: {value}</p>
      <p>Service: {service}</p>
      <p>Review: {content}</p>
    </li>
  );
};

export default ReviewListItem;
