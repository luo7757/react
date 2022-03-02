import React from 'react';
import ReactDOM from 'react-dom';
import img1 from './assets/1.png';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';

let index = 0;
let timer = null;
let imgArr = [img1, img2, img3];
const dom = document.getElementById('root');

function renderImg(){
  const div = (
    <div>
      <img alt='图片' src={imgArr[index]}></img>
    </div>
  )
  ReactDOM.render(div, dom);
}

function start(){
  timer = setInterval(() => {
    index = (index + 1) % 3;
    renderImg();
  }, 2000)
}
dom.addEventListener('mouseleave', () => {
  start();
})
dom.addEventListener('mouseenter', () => {
  clearInterval(timer);
})

start();
