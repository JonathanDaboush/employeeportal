import React, {Component,useState,useEffect} from 'react';
import Autocomplete from '../../Util/autocomplete.jsx';
import axios from 'axios';
import JSOG from 'jsog';
import 'bootstrap/dist/css/bootstrap.min.css';
import  decrypt  from '../../Util/jsogRetreival.js';
import Event from './event/event.jsx';

let mainContentShell=()=>{
    <Event edit={true}/>
}
export default mainContentShell;