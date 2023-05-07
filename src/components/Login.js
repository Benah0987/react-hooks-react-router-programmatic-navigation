import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//stp one import usehistory 

function Login({ setIsLoggedIn }) {
  const history = useHistory();
  //create a state object formData
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  //updates the FormData whenever the user object
  //enter text using the state
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://localhost:3001/login", {
      method:"POST",
      headers: {"Content-Type": "application/json",

    }, body: JSON.stringify(formData),
  })
    .then((r) => r.json())
    .then((user) => {
      setIsLoggedIn(user);
      //rediret to home page
      history.push("/home");
    })

  }

  return (


    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
