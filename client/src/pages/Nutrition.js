import process from "process";
import React from "react";
import { useState } from "react";
import Label from "./Label";

const Nutrition = () => {
  const [labelReady, setLabelReady] = useState(false)
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
      })
    })
    .catch(err => console.log(err))
    .finally(() => setLabelReady(true))
  }

  return (
    <>
      <form onSubmit={callNinja}>
        <input type="text" name="query"></input>
        <input type="submit"></input>
      </form>
        {labelReady && <Label />}
    </>
  );
};

export default Nutrition;
