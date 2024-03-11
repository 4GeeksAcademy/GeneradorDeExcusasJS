/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = () => {
  document.querySelector("#excuseGenerator").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
};

function excuseGenerator() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car", "my makeup"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch"
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

  return frase;
}
