import React, {Component,Fragment} from 'react';
import axios from 'axios';
import JSOG from 'jsog';
class sighnIn extends Component {

         constructor(props)
          {
              super(props);
              this.state = {
                email:"",
                password: "",
                message:"",
                employee:{}
              }
              this.sighnUp=this.sighnUp.bind(this);
              this.forgot=this.forgot.bind(this);
        
          }
        sighnUp=async ()=>{
            let obj;
            let email=this.state.email;
            let password=this.state.password;
            
            await axios.get(
                'http://localhost:8080/authentification/getBySighnIn/'+email+'/'+password)
                   .then(res => {
                  
                   obj = JSOG.stringify(res.data);
                 }).then().catch(
                 function (error) {
                  console.log(error);
                });
                this.setState({employee:obj});
               this.props.sighnIn(obj);

        }
      forgot=()=>{
        this.props.hasForgot();
       } 
      render()
      {
  
        this.getDefaultData();
        return(
                    <div>
                        <div>
                            <form onSubmit={this.sighnUp}>
                                <input type="text" onChange={(e)=>{this.setState({email:e})}} value={this.state.email} />                       
                                <input type="text" onChange={(e)=>{this.setState({password:e})}} value={this.state.password} />
                                <input type="submit" value="submit" />
                            </form></div>
                            <div>
                                <button onClick={this.forgot}>forgot password</button>
                        </div>
                    </div>);
       
    
    
      }
    
  }
  
  // Exporting the component
  export default sighnIn;