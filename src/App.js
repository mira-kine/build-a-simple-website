import React, { useState, useEffect } from 'react';
import grapesjs from "grapesjs";
import './styles/main.scss';

// grapesJS is an open-source web builder framework 

function App() {
  const [editor, setEditor] = useState(null);

  // useEffect to build the editor with grapesJS
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
    });
    setEditor(editor);
  }, []);

  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}

export default App;
