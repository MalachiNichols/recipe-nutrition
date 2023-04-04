import process from "process";
import React from "react";
import { useState } from "react";

const Nutrition = () => {
  const callNinja = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_API_KEY);
    await fetch(
      "https://api.api-ninjas.com/v1/nutrition?query=" + e.target.query.value,
      {
        headers: {
          "X-Api-Key": process.env.REACT_APP_API_KEY,
        },
        contentType: "application/json",
      }
    ).then((res) => {
      console.log(res);
      res.json().then((data) => {
        console.log(data);
        alert(JSON.stringify(data));
      });
    });
  };

  return (
    <form onSubmit={callNinja}>
      <input type="text" name="query"></input>
      <input type="submit"></input>
    </form>
  );
};

export default Nutrition;
