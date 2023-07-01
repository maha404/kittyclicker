"use strict";

let counter = document.getElementById('counter');
let btn = document.getElementById('btn');
let msg = document.getElementById('message');

const audio = new Audio("ding.mp3");
audio.preload = 'auto';
audio.load();

let num = 0;

btn.addEventListener('click', () => {
    console.log(num + 1);
    num += 1;
    counter.innerHTML = num;
  
    audio.play();
});

