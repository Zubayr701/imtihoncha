import { useState } from 'react'
import './App.css'
import Header from './components/Header/header.jsx'
import UpComing from './components/UpComing/upcoming.jsx'
import Popular from './components/Popular/popular.jsx'
import TopRated from './components/TopRated/TopRated.jsx'


function App() {

  const API_KEY = "17f1ceadcf3767a35e55dd6204800668";
  const ellist = document.querySelector('.list')
  function elBtns1() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => render(data.results, ellist));
  };
  function elBtns2() {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => render(data.results, ellist));
  };
  function elBtns3() {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => render(data.results, ellist));
  };

  function elBtns4() {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => render(data.results, ellist));
  };


  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => render(data.results, ellist));


  function render(array, node) {
    node.innerHTML = "";
    array.forEach((item) => {
      node.innerHTML += `<li class="list__item"><img class="item__img" width="300" src="https://image.tmdb.org/t/p/original${item.poster_path}
      alt="${item.overview}">
      <h3 class="item__title">${item.name}</h3></li>`;
    });
  }

  return (

    <>
      <Header />
    </>
  )
}

export default App