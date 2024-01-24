import './main.css';

import sum from './modules/sum.js';



const root = document.getElementById('root');

root.textContent = sum(1, 2, 3);