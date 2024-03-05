/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let numeroRandom = getRandomInt(4);

  let frase =
    who[numeroRandom] +
    " " +
    action[numeroRandom] +
    " " +
    what[numeroRandom] +
    " " +
    when[numeroRandom];

  console.log(frase);

  document.getElementById("excuse").innerHTML = frase;
};
