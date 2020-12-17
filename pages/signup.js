import { useContext } from "react";
import { useRouter } from "next/router";

import { UserContext } from "../contexts/userContext";

import Layout from "../layouts/Layout";

const Signup = () => {
  const { login } = useContext(UserContext);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "chris88", password: "password" }),
    });
    const json = await response.json();
    login(json);
    router.push("/discover");
  };

  return (
    <Layout>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value="chris88" name="username" />
        <input type="password" value="password" name="password" />
        <input type="submit" value="Signup" />
      </form>
    </Layout>
  );
};

export default Signup;
