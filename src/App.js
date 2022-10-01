import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Editor from './components/Editor';
// import  {compileFunc} from "ton-compiler";
// import mainFc from "./main.fc"
import {compileFunc, compilerVersion} from '@ton-community/func-js';
import {Cell} from 'ton';

//console
function App () {
  async function main() {
    // You can get compiler version
    let version = await compilerVersion();

    let result = await compileFunc({
      // Entry points of your project
      entryPoints: ['main.fc'],
      // Sources
      sources: {
        "stdlib.fc": "<stdlibCode>",
        "main.fc": "<contractCode>",
        // Rest of the files which are included in main.fc if some
      }
    });
    if (result.status === 'error') {
      console.error(result.message)
      return;
    }

    // result.codeBoc contains base64 encoded BOC with code cell
    let codeCell = Cell.fromBoc(Buffer.from(result.codeBoc, "base64"))[0];

    // result.fiftCode contains assembly version of your code (for debug purposes)
    console.log(result.fiftCode)
  }
 console.log(main());
  const [openedEditor, setOpenedEditor] = useState('html');

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState(``);


  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      )
    }, 250);

    return () => clearTimeout(timeOut)
  }, [html, css, js])

  return (
    <div className="App">
      {/*<div className="glitch-embed-wrap" style={{height: "420px", width: "100%"}}>*/}
      {/*  <iframe*/}
      {/*      src={"https://glitch.com/embed/#!/embed/cyclic-sticky-brazil?path=tsconfig.json&previewSize=100"}*/}
      {/*      title={"cyclic-sticky-brazil on Glitch"}*/}
      {/*      allow={"geolocation; microphone; camera; midi; encrypted-media; xr-spatial-tracking; fullscreen"}*/}
      {/*      allowFullScreen*/}
      {/*      style={{height: "100%", width: "100%",border: 0}}>*/}
      {/*  </iframe>*/}
      {/*</div>*/}
      <p>Welcome to the edior</p>
      <div className="tab-button-container">
        <Button title="HTML" onClick={() => {
          onTabClick('html')
        }} />
        <Button title="CSS" onClick={() => {
          onTabClick('css')
        }} />
        <Button title="JavaScript" onClick={() => {
          onTabClick('js')
        }} />
      </div>
      <div className="editor-container">
        {
          openedEditor === 'html' ? (
            <Editor
              language="xml"
              displayName="HTML"
              value={html}
              setEditorState={setHtml}
            />
          ) : openedEditor === 'css' ? (
            <Editor
              language="css"
              displayName="CSS"
              value={css}
              setEditorState={setCss}
            />
          ) : (
            <Editor
              language="javascript"
              displayName="JS"
              value={js}
              setEditorState={setJs}
            />
          )
        }
      </div>
      <div>
        <iframe
          id="my_iframe"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="1"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
