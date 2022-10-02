import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Editor from './components/Editor';
// import  {compileFunc} from "ton-compiler";
// import mainFc from "./main.fc"
// import {compileFunc, compilerVersion} from '@ton-community/func-js';
// import {Cell} from 'ton';
// import {library} from './stdLibrary';
// import {mainFun} from './mainFun';
// import stdLib from '../../back-end/stdLibrary.fc'
// // import mainFun from './mainFun.fc'
// import {constant} from "./constant";
// import {utils} from "./utils";
// import  fs from 'fs'

function App () {
  const [items, setItems] = useState([]);


  const fetchItems = async (text) => {
    fetch(`/api/${text}`).then(async response => {
      console.info(decodeURI(response.url));
      let data = await response.json()
      console.log(data);
      setItems(data);
    })
  }
  const [openedEditor, setOpenedEditor] = useState('html');

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState(``);

  useEffect(()=>{
    window.ref = React.createRef()
// fetchItems()
  },[])


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
        <Button title={"compile"} onClick={()=>{
          let result = ''
         document.querySelectorAll('.CodeMirror-line ').forEach((e)=>{
           result +=`${e.textContent}$`;
         })
          console.log(result);
          fetchItems(result)

        }
        }></Button>
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
            <Editor ref={window.ref}
              language="javascript"
              displayName="JS"
              value={js}
              setEditorState={setJs}/>
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
          width="150%"
          height="150%"
        />
      </div>
    </div>
  );
}

export default App;
