import React, { useState } from "react";
import "./styles.css";

var foodDictionary = {
  "🍕": "Pizza",
  "🍔": "Burger",
  "🍟": "Fries",
  "🍿": "Popcorn",
  "🧇": "Waffle",
  "🥞": "Pancake",
  "🍩": "Donut",
  "🥨": "Pretzel",
  "🥐": "Croissant",
  "🥯": "Bagel",
  "🧁": "Cupcake",
  "🍪": "Cookie",
  "🎂": "Cake",
  "🍰": "Shortcake",
  "🍫": "Chocolate",
  "🍭": "Popsicle"
};

console.log(Object.keys(foodDictionary));
var foodsWeKnow = Object.keys(foodDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function foodInputHandler(event) {
    //processing
    var userInput = event.target.value;
    var meaning = foodDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }
    setMeaning(meaning); //react call to show output
  }

  function foodClickHandler(food) {
    //processing
    // console.log(food);
    var meaning = foodDictionary[food];
    setMeaning(meaning); //react call to show output
  }
  return (
    <div className="App">
      <h1>Food Interpreter</h1>
      <input
        onChange={foodInputHandler}
        placeholder="Put an food emoji here to know the meaning"
      />
      <h2> {meaning} </h2> {/* Actual output set by React using useState */}
      <h3> Foods we know </h3>
      {foodsWeKnow.map(function (food) {
        return (
          <span
            onClick={() => foodClickHandler(food)}
            style={{ fontsize: "6rem", padding: "0.5rem" }}
            key={food}
          >
            {food}{" "}
          </span>
        );
      })}
    </div>
  );
}
