import generateJoke from "./generateJoke";
import "./styles/main.scss";
import stars from "./assets/stars.svg";

const starImg = document.getElementById("starImg");
starImg.src = stars;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
