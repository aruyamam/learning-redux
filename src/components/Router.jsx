import React from 'react';
import MainPage from './pages/MainPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

const Router = ({ route }) => {
   switch (route) {
      case 'about':
         return <AboutPage />;

      default:
      case 'main':
         return <MainPage />;
   }
};

export default Router;
