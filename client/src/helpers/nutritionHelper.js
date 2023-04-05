const combineValues = (values) => {
  let result = {
    name: values[0].name,
    calories: 0,
    totalFat: 0,
    satFat: 0,
    transFat: 0,
    cholesterol: 0,
    sodium: 0,
    carbs: 0,
    fiber: 0,
    sugar: 0,
    protein: 0,
    potassium: 0,
    servingSize: 0
  };
  values.map((ingredient, ind) => {
    if (ind > 0) {
      result.name = result.name + " and " + ingredient.name;
    }
    result.calories += ingredient.calories;
    result.totalFat += ingredient.fat_total_g;
    result.satFat += ingredient.fat_saturated_g;
    result.cholesterol += ingredient.cholesterol_mg;
    result.sodium += ingredient.sodium_mg;
    result.carbs += ingredient.carbohydrates_total_g;
    result.fiber += ingredient.fiber_g;
    result.sugar += ingredient.sugar_g;
    result.protein += ingredient.protein_g;
    result.potassium += ingredient.potassium_mg;
    result.servingSize += ingredient.serving_size_g;
  });
  return result;
};

export default combineValues;