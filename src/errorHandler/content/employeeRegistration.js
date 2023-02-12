import axios from 'axios';
import JSOG from 'jsog';
export default function updateValidator(
firstName,middleName,lastName,email,phoneNumber,password,creditCardNo,cvv
){
    let errors={
        firstNameErrorMessage:"",
        middleNameErrorMessage:"",
        lastNameErrorMessage:"",
        emailErrorMessage:"",
        phoneNumberErrorMessage:"",
        passwordErrorMessage:"",
        creditCardNoErrorMessage:"",
        cvvErrorMessage:""
    }
    let nameError="name must only contain letters.";
    let emailError="an employee already has this email.";
    let phoneNumberError="phone number must be displayed as 555-555-5555";
    let creditCarcNoError="credit card number must be formatted as 1111-2222-3333-4444";
    let cvvError="cvv must be structured as so 111";
    let passwordError="pass word must be at least 8 characters in length and contain one silent/upper case letter on number and may have the following characters !#$%";
    
    if(/^[a-zA-Z()]+$/.test(firstName)){
        errors.firstNameErrorMessage=nameError;
    }
    if(/^[a-zA-Z()]+$/.test(middleName)){
        errors.middleNameErrorMessage=nameError;   
    }
    if(/^[a-zA-Z()]+$/.test(lastName)){
        errors.lastNameErrorMessage=nameError; 
    }
    if(! /[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(phoneNumber)){
        errors.phoneNumberErrorMessage=phoneNumberError; 
    }
    if(! /[0-9]{3}/.test(cvv)){
        errors.cvvErrorMessage=cvvError; 
    }
    if(! /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/.test(creditCardNo)){
        errors.creditCardNoErrorMessage=creditCarcNoError; 
    }
    let hasemail=false;
    axios.get(
        'http://localhost:8080/employee'+"/getByEmail/"+email)
           .then(res => {
             
             let employee = JSOG.stringify(res.data);
             if(employee.email){
                hasemail=true;
             }
         }).catch(
         function (error) {
          
        });
    if(hasemail){
        errors.emailErrorMessage=emailError;
    }
    if(! /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z[0-9]@$!%*#?&]{1,}$/.test(password)){
        errors.passwordErrorMessage=passwordError;
    }

    return errors;
}
