import React from "react";
import { useState } from "react";
import Label from "./Label";
import combineValues from "../helpers/nutritionHelper";

const Nutrition = () => {
  const [labelReady, setLabelReady] = useState(false);
  const [nutritionValues, setNutritionValues] = useState({})
  const callNinja = async (e) => {
    e.preventDefault();
    await fetch(
      "https://api.api-ninjas.com/v1/nutrition?query=" + e.target.query.value,
      {
        headers: {
          "X-Api-Key": process.env.REACT_APP_API_KEY,
        },
        contentType: "application/json",
      }
    )
      .then((res) => {
        res.json().then((data) => {
          alert(JSON.stringify(data));
          let values = combineValues(data)
          setNutritionValues(values)
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLabelReady(true);
      })
  };

  return (
    <>
      <form onSubmit={callNinja}>
        <input type="text" name="query"></input>
        <input type="submit"></input>
      </form>
      {labelReady && <Label nutritionValues={nutritionValues}/>}
    </>
  );
};

export default Nutrition;
