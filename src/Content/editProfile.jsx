import React, {Component,useState,useEffect} from 'react';
import axios from 'axios';
import JSOG from 'jsog';
import 'bootstrap/dist/css/bootstrap.min.css';
import updateValidator from '../errorHandler/content/employeeRegistration.js';
let EmployeeWrite=(props)=> {
    let [firstName,setFirstName]=useState(this.props.employee.firstName);
    let [middleName,setMiddleName]=useState(this.props.employee.middleName);
    let [lastName,setLastName]=useState(this.props.employee.lastName);
    let [email,setEmail]=useState(this.props.employee.email);
    let [phoneNumber,setPhoneNumber]=useState(this.props.employee.phoneNumber);
    let [address,setAddress]=useState(this.props.employee.address);

    let [password,setPassword]=useState(this.props.employee.authentification.password);

    let [nameOnCreditCard,setNameOnCreditCard]=useState(this.props.employee.employeeFinance.nameOnCreditCard);
    let [creditCardNo,setCreditCardNo]=useState(this.props.employee.employeeFinance.creditCardNo);
    let [cvv,setCvv]=useState(this.props.employee.employeeFinance.cvv);
    let [goodThru,setGoodThru]=useState(this.props.employee.employeeFinance.goodThru);

    let [errors,setErrors]=useState({});

  
    useEffect(() => {
    }, []);

    let handleSubmit=async ()=>{
        setErrors(updateValidator(firstName,middleName,lastName,email,phoneNumber,password,creditCardNo,cvv));
       let noErrors=true;
       let values=Object.values(errors);
       values.map((e)=>{if(e!=""){noErrors=false;}})
       if(noErrors){
        let obj;

        let employee=this.props.employee;
        let employeeFinance=this.props.employee.employeeFinance;
        let authentification=this.props.employee.authentification;

        authentification.password=password;

        employeeFinance.nameOnCreditCard=nameOnCreditCard;
        employeeFinance.cvv=employeeFinance.cvv;
        employeeFinance.goodThru=goodThru;
        employeeFinance.nameOnCreditCard=employeeFinance.nameOnCreditCard;

        employee.firstName=firstName;
        employee.middleName=middleName;
        employee.lastName=lastName;
        employee.email=email;
        employee.phoneNumber=phoneNumber;
        employee.password=password;

        await axios.post(
        'http://localhost:8080/authentification/',{authentification:authentification})
            .then(res => {
           
            
            obj = JSOG.stringify(res.data);
            }).then().catch(
            function (error) {
            console.log(error);
        });
        await axios.post(
            'http://localhost:8080/employee',{employee:employee })
                .then(res => {
              
                
                obj = JSOG.stringify(res.data);
                }).then().catch(
                function (error) {
                console.log(error);
            });
            await axios.post(
                'http://localhost:8080/employeeFinance',{employeeFinance:employeeFinance })
                    .then(res => {
                   
                    
                    obj = JSOG.stringify(res.data);
                    }).then().catch(
                    function (error) {
                    console.log(error);
                });
       }
    }


return(
    <form onSubmit={handleSubmit}>
        <div id="panel1">
            <div>
                <label for="firstName">first name:</label>
                <input type="text" defaultValue={firstName} id="firstName" onChange={(e)=>{setFirstName(e.target.defaultValue)}} />
                <div>{errors.firstNameErrorMessage||""}</div>
            </div>
            <div>
                <label for="middleName">middle name:</label>
                <input type="text" defaultValue={middleName} id="middleName" onChange={(e)=>{setMiddleName(e.target.defaultValue)}} />
                <div>{errors.middleNameErrorMessage||""}</div>
            </div>
            <div>
                <label for="lastName">last name:</label>
                <input type="text" defaultValue={lastName} is="lastName" onChange={(e)=>{setLastName(e.target.defaultValue)}} />
                <div>{errors.lastNameErrorMessag||""}</div>
            </div>
            <div>
                <label for="email">email:</label>
                <input type="text" defaultValue={email} is="email" onChange={(e)=>{setEmail(e.target.defaultValue)}} />
                <div>{errors.emailErrorMessage||""}</div>
            </div>
            <div>
                <label for="address">address:</label>
                <input type="text" defaultValue={address} is="address" onChange={(e)=>{setAddress(e.target.defaultValue)}} />
            
            </div>
            <div>
                <label for="phoneNumber">phone number:</label>
                <input type="text" defaultValue={phoneNumber} is="phoneNumber" onChange={(e)=>{setPhoneNumber(e.target.defaultValue)}} />
                <div>{errors.phoneNumberErrorMessage||""}</div>
            </div>
        </div>
        <div id="panel2">
                <label for="password">password:</label>
                <input type="text" defaultValue={password} is="password" onChange={(e)=>{setPassword(e.target.defaultValue)}} />
                <div>{errors.passwordErrorMessage||""}</div>
            </div>
       
        <div id="panel3">
        <div>
                <label for="nameOnCreditCard">name On Credit Card:</label>
                <input type="text" defaultValue={nameOnCreditCard} id="nameOnCreditCard" onChange={(e)=>{setNameOnCreditCard(e.target.defaultValue)}} />
               
            </div>
            <div>
                <label for="creditCardNo">credit Card No:</label>
                <input type="text" defaultValue={creditCardNo} id="creditCardNo" onChange={(e)=>{setCreditCardNo(e.target.defaultValue)}} />
                <div>{errors.creditCardNoErrorMessage||""}</div>
            </div>
            <div>
                <label for="cvv">cvv:</label>
                <input type="text" defaultValue={cvv} is="cvv" onChange={(e)=>{setCvv(e.target.defaultValue)}} />
                <div>{errors.cvvErrorMessage||""}</div>
            </div>
            <div>
                <label for="goodThru">good thru:</label>
                <input type="text" defaultValue={goodThru} is="goodThru" onChange={(e)=>{setGoodThru(e.target.defaultValue)}} />
             
            </div>
        </div>
        <input type="submit" defaultValue="edit"/>
    </form>
);
}
export default EmployeeWrite;