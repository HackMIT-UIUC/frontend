import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";


// 1. Create a client engine instance
const engine = new Styletron();

// 2. Provide the engine to the app
// debug engine needs inlined source maps
ReactDOM.render(
  <StyletronProvider value={engine} >
    <Main />
  </StyletronProvider>, document.getElementById("root")
);