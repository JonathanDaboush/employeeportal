import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';
import MainShellComponent from "./mainShell";
import * as fcl from "@onflow/fcl";
function App() {
  return (
    <div className="App">
     <MainShellComponent />
    </div>
  );
}

export default App;
