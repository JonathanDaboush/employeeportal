import React, {Component,Fragment} from 'react';
import axios from 'axios';
import JSOG from 'jsog';
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
class calender extends Component {

         constructor(props)
          {
              super(props);
              this.state = {
                events:[]
              }
              this.generate=this.generate.bind(this);
        
          }
     async generate(){
        let list=this.props.employee.events;

       
        this.setState({events:list});
      }
      componentDidMount(props) {
        this.generate();
        $('#calender').evoCalendar({
        
            calendarEvents: this.state.events
        
          });
          
      }
      render()
      {
  
        this.getDefaultData();
        return(
                    <div id="calender">
                       
                    </div>);
       
    
    
      }
    
  }
  
  // Exporting the component
  export default calender;