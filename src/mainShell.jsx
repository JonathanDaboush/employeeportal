import React, {Component,Fragment} from 'react';
import {mainShell} from './Content/mainShell';
import ForgotPasswordComponent from './login/forgotPassword';
import sighnIn from './login/sighnIn';


import axios from 'axios';
import JSOG from 'jsog';
class MainShellComponent extends Component {

         constructor(props)
          {
              super(props);
              this.state = {
                employee:{},
                forgot:false
              }
              this.sighnIn=this.sighnIn.bind(this);
              this.hasForgot=this.hasForgot.bind(this);
        
          }
          sighnIn=(e)=>{this.setState({employee:e})}
        
          hasForgot=()=>{
            let opposite=!this.state.forgot;
            this.setState({forgot:opposite})}
      render()
      {
  
        this.getDefaultData();
        if(this.state.employee.firstName){
            return(<mainShell employee={this.state.employee}/>);
        }
        else if(this.state.forgot){
            return(<ForgotPasswordComponent hasForgot={this.hasForgot} />);
        }
        else{
            return(<sighnIn  hasForgot={this.hasForgot} sighnIn={this.sighnIn} />);
        }
       
    
    
      }
    
  }
  
  // Exporting the component
  export default MainShellComponent;