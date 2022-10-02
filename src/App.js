import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Editor from './components/Editor';
// import  {compileFunc} from "ton-compiler";
// import mainFc from "./main.fc"
import {compileFunc, compilerVersion} from '@ton-community/func-js';
import {Cell} from 'ton';

//console
const tasks = [
    "The smart contract that we will create should have the following functionality:\n" +
    "- store in its data an integer *total* - a 64-bit unsigned number;\n" +
    "- when receiving an internal incoming message, the contract must take an unsigned 32-bit integer from the message body, add it to *total* and store it in the contract data;\n" +
    "- The samrt contract must provide a *get total* method that allows you to return the value of *total*\n" +
    "- If the body of the incoming message is less than 32 bits, then the contract must throw an exception",

    ""];
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
  return (
    <div className="App" >
        <header className="menu-bar">
            <h3><a href="">FunMix</a></h3>
            <div className="dropdown">
                <button id="hover-underline-animation" onClick={LoadContent}>Tasks</button>
                <div className="dropdown-content">
                    <button id="1" onClick={((e) => GetTask(e))}>Task 1</button>
                    <button id="2" onClick={((e) => GetTask(e))}>Task 2</button>
                </div>
            </div>
        </header>
        <div className="container">
            <div className="text-center text-3xl" id="tasks-container">
                <h3>Tasks</h3>
                <p id="task-text">
                    {/*The smart contract that we will create should have the following functionality: <br/>*/}
                    {/*- store in its data an integer *total* - a 64-bit unsigned number;<br/>*/}
                    {/*- when receiving an internal incoming message, the contract must take an unsigned 32-bit integer from the message body, add it to *total* and store it in the contract data;<br/>*/}
                    {/*- The samrt contract must provide a *get total* method that allows you to return the value of *total*<br/>*/}
                    {/*- If the body of the incoming message is less than 32 bits, then the contract must throw an exception*/}
                </p>
            </div>
            <div className="editor-container">
                {
                    <Editor
                        language="xml"
                        displayName="HTML"
                        value={html}
                        setEditorState={setHtml}
                    />
                }
        </div>
      </div>
    </div>
  );
}

function LoadContent(){
    let taskContainer = document.getElementById("task-text");
    let buttonsList = document.getElementsByClassName("dropdown-content");
    taskContainer.innerText = tasks.at(0);
    for (let i = 0; i < tasks.length; i++){
        let button = document.createElement("button");
        button.id = "";
        button.innerHTML = "Task " + (i+1);
        button.addEventListener("click", ((e) => GetTask(e)));
        buttonsList[0].appendChild(button);
    }
}
function GetTask(e){
    let taskContainer = document.getElementById("task-text");
    let buttonsList = document.getElementsByClassName("task-buttons");
    taskContainer.innerText = tasks.at(e.target.id - 1);
}
export default App;
