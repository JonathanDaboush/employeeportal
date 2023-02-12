import React, {Component,Fragment} from 'react';
import calender from './calender';
import mainContentShell from './mainContent/mainContentFrame';
import EmployeeWrite from './editProfile';
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
class mainShell extends Component {

         constructor(props)
          {
              super(props);
              this.state = {
               tabNum:1

              }
              this.changeTab = this.changeTab.bind(this);
          }
          changeTab(i){
            this.setState({tabNum:i})
          }
      render()
      {
  
        this.getDefaultData();
        return(<div>
                    <div><button onClick={() => this.changeTab(1)}>account info</button>
                    <button onClick={() => this.changeTab(2)}>calender</button>
                    <button onClick={() => this.changeTab(3)}>main tab</button></div>
                    <div id="mainShell">
                    <div id="tab1" className={this.state.tab==1 ? 'd-block' :'d-none'}>
                        <calender employee={this.props.employee} />
                    </div>
                    <div id="tab2" className={this.state.tab==2  ? 'd-block' :'d-none'}>
                        <EmployeeWrite employee={this.props.employee} />
                    </div>
                    <div id="tab3" className={this.state.tab==3  ? 'd-block' :'d-none'}>
                      <mainContentShell employee={this.props.employee} />
                    </div>
                       
                    </div></div>);
       
    
    
      }
    
  }
  
  // Exporting the component
  export default mainShell;