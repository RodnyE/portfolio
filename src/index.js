
import React from 'react'  
import { createRoot } from 'react-dom/client';

import aos from 'aos'
import 'aos/dist/aos.css'

import './styles/theme.css' 
import './styles/main.css'
import './styles/font.css'
import './styles/utils.css' 
import './styles/animations.css' 

import App from './App.jsx' 

// render
const root = createRoot(document.getElementById('root'));
root.render(<App/>);
aos.init();