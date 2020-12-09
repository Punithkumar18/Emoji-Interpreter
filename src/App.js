import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😁": "smiling",
  "😏": "Ignore",
  "👌": "super",
  "❤️": "love",
  "😎": "cool",
  "😑": "sad"
};
var emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning);
  }
  function emojiclickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Intrepreter</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      <h4>Select the Emoji you want to know the meaning </h4>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
