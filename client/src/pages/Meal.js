import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Meal = ({ meal }) => {
  const [ingredients, setIngredients] = useState("");
  const x = "";

  const createIngredientString = () => {
    let tmp = meal.strIngredient1;
    for (const key in meal) {
      if (meal.hasOwnProperty(key)) {
        if (key.includes("Ingredient")) {
          if (meal[key]) {
            if (key != "strIngredient1") {
              tmp = tmp + ", " + meal[key];
            }
          }
        }
      }
    }
    setIngredients(tmp);
  };

  useEffect(() => {
    createIngredientString();
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={meal.strMealThumb}
        title="meal image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {meal.strMeal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ingredients}
        </Typography>
      </CardContent>
      <CardActions>
      <Typography variant="body2" color="text.secondary">{meal.strCategory}</Typography>
      <Typography variant="body2" color="text.secondary">Cuisine: {meal.strArea}</Typography>
        <Button size="small">Recipe</Button>        
      </CardActions>
    </Card>
  );
};

export default Meal;
