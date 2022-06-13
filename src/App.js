import React, { useState, useEffect } from 'react';
import grapesjs from "grapesjs";
import './styles/main.scss';
import Editor from './components/Editor/Editor';

// grapesJS is an open-source web builder framework 

function App() {

  return (
    <div className="App">\
      <Editor />
    </div>
  );
}

export default App;
