import React from "react";

const Label = ({ nutritionValues }) => {
  return (
    <section class="performance-facts">
      <header class="performance-facts__header">
        <h1 class="performance-facts__title">Nutrition Facts</h1>
        <p>Serving Size {Math.round(nutritionValues.servingSize)}g</p>
        {/* <p>Serving Per Container 8</p> */}
      </header>
      <table class="performance-facts__table">
        <thead>
          <tr>
            <th colspan="3" class="small-info">
              Amount Per Serving
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan="2">
              <b>Calories</b>
              {Math.round(nutritionValues.calories)}
            </th>
            <td>Calories from Fat {Math.round(nutritionValues.totalFat*9)}</td>
          </tr>
          <tr class="thick-row">
            <td colspan="3" class="small-info">
              <b>% Daily Value*</b>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Total Fat</b>
              {Math.round(nutritionValues.totalFat)}g
            </th>
            <td>
              <b>{Math.round(nutritionValues.totalFat/78*100)}%</b>
            </td>
          </tr>
          <tr>
            <td class="blank-cell"></td>
            <th>Saturated Fat {Math.round(nutritionValues.satFat)}g</th>
            <td>
              <b>{Math.round(nutritionValues.satFat/20*100)}%</b>
            </td>
          </tr>
          <tr>
            {/* <td class="blank-cell"></td>
            <th>Trans Fat 0g</th>
            <td></td> */}
          </tr>
          <tr>
            <th colspan="2">
              <b>Cholesterol</b>
              {Math.round(nutritionValues.cholesterol)}mg
            </th>
            <td>
              <b>{Math.round(nutritionValues.cholesterol/300*100)}%</b>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Sodium</b>
              {Math.round(nutritionValues.sodium)}mg
            </th>
            <td>
              <b>{Math.round(nutritionValues.sodium/2300*100)}%</b>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Total Carbohydrate</b>
              {Math.round(nutritionValues.carbs)}g
            </th>
            <td>
              <b>{Math.round(nutritionValues.carbs/275*100)}%</b>
            </td>
          </tr>
          <tr>
            <td class="blank-cell"></td>
            <th>Dietary Fiber {Math.round(nutritionValues.fiber)}g</th>
            <td>
              <b>{Math.round(nutritionValues.fiber/28*100)}%</b>
            </td>
          </tr>
          <tr>
            <td class="blank-cell"></td>
            <th>Sugars {Math.round(nutritionValues.sugar)}g</th>
            <td></td>
          </tr>
          <tr class="thick-end">
            <th colspan="2">
              <b>Protein</b>
              {Math.round(nutritionValues.protein)}g
            </th>
            <td>
              <b>{Math.round(nutritionValues.protein/50*100)}%</b>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <table class="performance-facts__table--grid">
        <tbody>
          <tr>
            <td colspan="2">Vitamin A 10%</td>
            <td>Vitamin C 0%</td>
          </tr>
          <tr class="thin-end">
            <td colspan="2">Calcium 10%</td>
            <td>Iron 6%</td>
          </tr>
        </tbody>
      </table>

      <p class="small-info">
        * Percent Daily Values are based on a 2,000 calorie diet. Your daily
        values may be higher or lower depending on your calorie needs:
      </p>

      <table class="performance-facts__table--small small-info">
        <thead>
          <tr>
            <td colspan="2"></td>
            <th>Calories:</th>
            <th>2,000</th>
            <th>2,500</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan="2">Total Fat</th>
            <td>Less than</td>
            <td>65g</td>
            <td>80g</td>
          </tr>
          <tr>
            <td class="blank-cell"></td>
            <th>Saturated Fat</th>
            <td>Less than</td>
            <td>20g</td>
            <td>25g</td>
          </tr>
          <tr>
            <th colspan="2">Cholesterol</th>
            <td>Less than</td>
            <td>300mg</td>
            <td>300 mg</td>
          </tr>
          <tr>
            <th colspan="2">Sodium</th>
            <td>Less than</td>
            <td>2,400mg</td>
            <td>2,400mg</td>
          </tr>
          <tr>
            <th colspan="3">Total Carbohydrate</th>
            <td>300g</td>
            <td>375g</td>
          </tr>
          <tr>
            <td class="blank-cell"></td>
            <th colspan="2">Dietary Fiber</th>
            <td>25g</td>
            <td>30g</td>
          </tr>
        </tbody>
      </table>

      <p class="small-info">Calories per gram:</p>
      <p class="small-info text-center">
        Fat 9 &bull; Carbohydrate 4 &bull; Protein 4
      </p> */}
    </section>
  );
};

export default Label;
