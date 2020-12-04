import Link from "next/link";

const MartketingBlock = () => {
  return (
    <section>
      <h2>Discover restaurants serving Gluten Free</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <Link href="/signup">
        <a>Get started</a>
      </Link>
    </section>
  );
};

export default MartketingBlock;
