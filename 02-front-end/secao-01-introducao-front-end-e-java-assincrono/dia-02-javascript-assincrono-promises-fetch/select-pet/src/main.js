import "./style.css";

const btnRandomDog = document.querySelector("#random-dog");
const btnRandomCat = document.querySelector("#random-cat");
const btnSurpriseMe = document.querySelector("#surprise-me");
const text = document.querySelector('h5');
const img = document.querySelector("img");

const handleRandomDog = async () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const getDog = await fetch(url);
  const date = await getDog.json();
  text.innerText = 'Cute dog';
  img.src = date.message;
};

const handleRandomCat = async () => {
  const url = "https://aws.random.cat/meow";
  const getCat = await fetch(url);
  const date = await getCat.json();
  img.src = date.file;
  text.innerText = 'Cute cat';
};

const handleSurpriseMe = async () => {
  const getDogOrCat = await Promise.any([
    fetch("https://dog.ceo/api/breeds/image/random"),
    fetch("https://aws.random.cat/meow"),
  ]);
  const date = await getDogOrCat.json();
  const catDogCat = date.message || date.file;
  img.src = catDogCat;
  catDogCat === date.message ? text.innerText = 'Cute dog' : text.innerText = 'Cute cat';
};

btnRandomDog.addEventListener("click", handleRandomDog);
btnRandomCat.addEventListener("click", handleRandomCat);
btnSurpriseMe.addEventListener("click", handleSurpriseMe);
