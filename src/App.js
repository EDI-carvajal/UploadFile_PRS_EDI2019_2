import React from 'react';
import './App.css';
import './customCss/home.css';
import logop from './images/logo.png';
import fondo from './images/descarga.svg';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import File from './components/file'



function App() {

  return (
    <div>
      <NotificationContainer></NotificationContainer>
      <File></File>
    </div >


  );
}

export default App; 
