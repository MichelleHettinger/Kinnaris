/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { render } from 'react-dom';
import ProdRoot from './Root.prod';

// Import Global Sass files
require('../assets/sass/mainstyles.scss');


render(<ProdRoot />, document.getElementById('app'));
