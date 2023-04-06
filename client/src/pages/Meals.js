import React from "react";
import { useState } from "react";
import Meal from "./Meal";

const Meals = () => {
  const [mealCards, setMealCards] = useState([]);
  const [showMeals, setShowMeals] = useState(false);

  const getMeals = async (e) => {
    e.preventDefault()
    await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + e.target.query.value)
      .then((res) => {
        console.log(res);
        res.json().then((data) => {
          console.log("data is : " + JSON.stringify(data));
          setMealCards(data.meals);
          setShowMeals(true);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={getMeals}>
        <input type="text" name="query"></input>
        <input type="submit"></input>
      </form>
      {showMeals && mealCards.map((meal) => <Meal meal={meal} />)}
    </>
  );
};

export default Meals;
