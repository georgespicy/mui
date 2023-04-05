import { Typography, Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

function Test() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  }

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          color: "red",
          fontFamily: "poppins",
          fontStyle: "italic",
        }}
      >
        Hello Earth!
      </Typography>
      <br />

      <Button
        sx={{ marginLeft: "10px", color: "orange" }}
        size="large"
        variant="contained"
        onClick={() => alert("color orange")}
      >
        Submit
      </Button>
      <Button
        sx={{ marginLeft: "10px", color: "green" }}
        size="medium"
        variant="outlined"
        onClick={() => alert("color green")}
      >
        Submit
      </Button>
      <Button
        sx={{ marginLeft: "10px", color: "red" }}
        size="string"
        variant="text"
        onClick={() => alert("color red")}
      >
        Submit
      </Button>
      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          name="name"
          variant="standard"
          placeholder="name"
          type="text"
          value={input.name}
        />
        <TextField
          onChange={handleChange}
          name="email"
          variant="filled"
          placeholder="Email"
          type="email"
          value={input.email}
        />
        <TextField
          onChange={handleChange}
          name="password"
          variant="outlined"
          placeholder="Password"
          type="password"
          value={input.password}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
}

export default Test;
