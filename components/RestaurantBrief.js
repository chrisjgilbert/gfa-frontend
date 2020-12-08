import Image from "next/image";

const Restaurantbrief = ({ name, address }) => {
  const imageSrc = () => {
    return `/${name.split(" ").join("-")}.png`;
  };
  return (
    <section>
      <h1>{name}</h1>
      <p>{address}</p>
      <Image src={imageSrc()} alt={name} height="300" width="300" />
    </section>
  );
};

export default Restaurantbrief;
