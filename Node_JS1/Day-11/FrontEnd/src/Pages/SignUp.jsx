import { useState } from "react";
import  axios  from "axios";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("🚀 ~ email:", email);
  console.log("🚀 ~ password:", password);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:7300/signup", { email, password });
  };

  return (
    <>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="text"
          placeholder="enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="pass"></label>
        <input
          type="password"
          id="pass"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
