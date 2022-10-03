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
const API_URL = "http://46.101.133.215"

function App () {
  const [items, setItems] = useState([]);


  const fetchItems = async (text) => {
    fetch(`https://www.funmix.xyz/api/${text}`).then(async response => {
      console.info(decodeURI(response.url));
      let data = await response.json()
      console.log(data);
      setOutputMsg(data);
    })
  }
  const [openedEditor, setOpenedEditor] = useState('html');

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState(``);
  const [outputMsg,setOutputMsg] = useState('');

  useEffect(()=>{
    // document.getElementById('javascript-btn').firstChild.firstChild.textContent = 'FunC'
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
      {(outputMsg.status ==='ok') ? (<div style={{display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <h3>Your reward:</h3>
        <img style={{width:'45%',border:'10px solid #5bd65b'}} src={"./nft.jpeg"}></img>
        <div style={{marginTop:'2rem'}}>
          <Button title={'Claim it'}></Button>
        </div>
      </div>) : (
          <>
            <div id='compile-button' style={{marginBottom:'3rem'}} className="tab-button-container">
              <Button title={"Compile"} onClick={()=>{
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
                    <Editor
                            language="javascript"
                            displayName="JS"
                            value={js}
                            setEditorState={setJs}/>
                )
              }
            </div>

            <div className="fakeScreen">

              <h3 style={{color:(outputMsg.status==="ok") ? 'green': 'red'}} >Status:{outputMsg.status}</h3>
              <p className="line1">{(outputMsg.message)}<span className="cursor1">_</span></p>
            </div>
          </>
      )
        }




    </div>
  );
}

export default App;
