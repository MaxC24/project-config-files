'use strict'

import $ from './cool';
import '../scss/style.scss';

const app = document.getElementById('app');
const comp = $('div');

comp.innerText = 'me too, I like';
app.innerText = 'HELLO WORLD';

app.appendChild(comp);


