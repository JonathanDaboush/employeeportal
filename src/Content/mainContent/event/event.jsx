import React, {Component,useState,useEffect} from 'react';

import axios from 'axios';
import JSOG from 'jsog';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StepDescription } from 'semantic-ui-react';
import Autocomplete from '../../../Util/autocomplete';
function Event(){
    let [list,setList]=useState([]);
    let [department,setDepartment]=useState("");
    let [name,setName]=useState("");
    let [description,SetDescription]=useState("");
    let [date,setDate]=useState("");
    let [type,setType]=useState("");
    let [event,setEvent]=useState=({});
    let getList=async()=>{
        let ofList=[];
        await   axios.get(
            'http://localhost:8080/department')
            .then(res => {
            
                let newObject={};
                let target="";
            
            target = JSOG.stringify(res.data);
                newObject= JSOG.parse(target);
                newObject.map(
                (e)=>{
                    ofList.push(e.name);
                }
                );
            }).then().catch(
            function (error) {
            console.log(error);
            });
            setList(ofList);
    }
    let dummy=async()=>{
        let eventnew={}
        await   axios.get(
            'http://localhost:8080/event/dummy')
            .then(res => {
            
                let newObject={};
                let target="";
            
            target = JSOG.stringify(res.data);
                newObject= JSOG.parse(target);
                eventnew=newObject;
            }).then().catch(
            function (error) {
            console.log(error);
            });
            setEvent(eventnew);
    }
    let onChange=(e)=>{
        setDepartment(e);
    }
    useEffect(() => {
       getList();
       dummy();
      },[]);
    let handleSubmit=async()=>{
        let thisEvent=event;
        thisEvent.name=name;
        thisEvent.description=description;
        thisEvent.type=type;
        thisEvent.date=date;
setEvent(thisEvent);
        await axios.post(
            'http://localhost:8080/event',{event:thisEvent,name:department })
            .then(res => {((e)=>{})();

       }).catch(
       function (error) {
        console.log(error);
      });
    }

    if(this.props.edit){
        return(<form  onSubmit={handleSubmit}>
                    <div>
                        <label for="name">name:</label>
                        <input type="text" value={name} id="name" onChange={(e)=>{setName(e.value.text)}} />
                    </div>
                    <div>
                        <label for="description">description</label>
                        <input type="text" value={description} id="description" onChange={(e)=>{StepDescription(e)}} />
                    </div>
                    <div>
                        <label for="date">date:</label>
                        <input type="date" value={date} id="date" onChange={(e)=>{setDate(encodeURIComponent)}} />
                    </div>
                    <div>
                        <label for="type">type:</label>
                        <input type="text" value={type} id="type" onChange={(e)=>{setType(e)}} />
                    </div>
                    <div>
                        <label for="type"></label>
                        <Autocomplete list={list} onChangeValue={(e)=>{onChange(e)}}/>
                                          
                    </div>
                    <input type="submit" value="submit" />
        </form>);
    }
    else{
        <div>

        </div>
    }
    
}
export default Event;