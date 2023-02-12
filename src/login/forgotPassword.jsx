import React, {Component,Fragment} from 'react';
import axios from 'axios';
import JSOG from 'jsog';
class ForgotemailComponent extends Component {

         constructor(props)
          {
              super(props);
              this.state = {
                email: "",
                message:""
              }
              this.send=this.send.bind(this);
              this.sign=this.sighn.bind(this);
        
          }
        send=async ()=>{
          let email=this.state.email;
            await axios.post(
                'http://localhost:8080/authentification/forgotPassword',{email:email })
                .then(res => {((e)=>{})();
    
           }).catch(
           function (error) {
            console.log(error);
          });
        }
      sighn=()=>{
        this.props.hasForgot();
       } 
      render()
      {
  
        this.getDefaultData();
        return(
                    <div>
                        <div>
                            <form onSubmit={this.send}>
                                <input type="text" onChange={(e)=>{this.setState({email:e})}} value={this.state.email} />
                                <input type="submit" value="submit" />
                            </form></div>
                            <div>
                                <button onClick={this.sighn}>Sighn in</button>
                        </div>
                    </div>);
       
    
    
      }
    
  }
  
  // Exporting the component
  export default ForgotemailComponent;