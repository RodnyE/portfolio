
import React from 'react'
import eruda from 'eruda'
import { debug } from '@/utils/debug.js'
import { createRoot } from 'react-dom/client';

import './styles/theme.css' 
import './styles/main.css'
import './styles/font.css'
import './styles/utils.css' 
import './styles/animations.css' 

import App from './App.jsx'

// browser console in development mode
eruda.init();
window.debug = debug;

// render
const root = createRoot(document.getElementById('root'));
root.render(<App/>);