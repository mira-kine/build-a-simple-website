import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import React from 'react';
import { useState, useEffect } from 'react';

export default function Editor() {
    const [editor, setEditor] = useState(null);

    // useEffect to build the editor with grapesJS
    useEffect(() => {
        // Indicate where to init editor
      const editor = grapesjs.init({
          container: "#editor",
          // get content for canvas directly from element
          // you can also gain from components
          fromElement: true,
          // Size of editor
          height: '300px',
          width: 'auto',
          // disable storage Manager for now
          storageManager: false,
          // avoid default panels
          panels: { defaults: [] },
      });
      setEditor(editor);
    }, []);

  return (
      <div id="editor">
          <h1>Hello World Component!</h1>
    </div>
  )
}
