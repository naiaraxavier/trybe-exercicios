import './style.css';

const allHeroes = () => {
  const image = document.getElementById('image');
  const name = document.getElementById('name');
  const number = 731;
  const idRandom = Math.round(Math.random() * number);
  // console.log(idRandom);
  fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${idRandom}.json`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      image.src = data.images.sm;
      name.innerText = data.name;
    });
};

const btn = document.getElementById('btn-raffle');
btn.addEventListener('click', allHeroes);
