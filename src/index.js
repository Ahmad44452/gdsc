//////////////// FONTS
import './fonts/GoogleSans/GoogleSans-Regular.ttf';
import './fonts/GoogleSans/GoogleSans-Italic.ttf';
import './fonts/GoogleSans/GoogleSans-Medium.ttf';
import './fonts/GoogleSans/GoogleSans-MediumItalic.ttf';
import './fonts/GoogleSans/GoogleSans-Bold.ttf';
import './fonts/GoogleSans/GoogleSans-BoldItalic.ttf';
//////////////////////////

import React from 'react';
import ReactDOM from 'react-dom/client';

import SiteRoutes from './SiteRoutes';

import './styles/main.scss';



ReactDOM.createRoot(document.getElementById('root')).render(
  <SiteRoutes />
);
