import React,{useState} from 'react';
//import ReactDOM from 'react-dom';
import {useFormik} from 'formik';
import axios from "axios";
import * as configSettings from "./Config/index";
const {API_PROTOCOL: API_PROTOCOL, API_URL: API_URL, API_PORT: API_PORT} = configSettings;

const validateEmployee = empData => {
  const errors = {};

  if (!empData.Name) {
    errors.Name = 'Please Enter Employee Name';
  } 


  if (!empData.EmailId) {
    errors.EmailId = 'Please Enter Email ID';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)) {
    errors.EmailId = 'Invalid email address';
  }
  if (!empData.Password) {
    errors.Password = 'Please Enter Password ';
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/i.test(empData.Password)) {
    errors.Password = 'Password Should contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
  }
  if (!empData.Cpassword) {
    errors.Cpassword = 'Enter your password';
  }
  else if(empData.Password !== empData.Cpassword ){
    errors.Cpassword = 'Password Should be matched';

  }
  if (!empData.Address) {
    errors.Address = 'Please Enter Address';
  }
  if (!empData.Gender) {
    errors.Gender= 'Please Select the Checkbox';
  }
  if (!empData.dob) {
    errors.dob= 'Please select the date of birth';
  }
  if (!empData.hobbies) {
    errors.hobbies= 'Please  Select your hobbies';
  }


  return errors;
};
const Registration=()=>{
   
  
    
  const formik=useFormik({

  initialValues:{
      Name:'',
      EmailId:'',
      Password:'',
      Cpassword:'',
      Address:'',
      Gender:'',
      dob:'',
      hobbies: ''
    },
 
    validate:validateEmployee,
    onSubmit:values=>{
      alert(JSON.stringify(values));
    
    }

  });
 /*  const [user, setUser] = useState({
    Name:'',
    EmailId:'',
    Password:'',
    Cpassword:'',
    Address:'',
    Gender:'',
    dob:'',
    hobbies: ''
  },)
  

let name ,value;
const postData=async(e)=>{
  
  e.preventDefault()
  name=e.target.Name;
  value=e.target.Value;
  setUser({...user,[name]:value})

  const {Name,
  EmailId,
  Password,
  Cpassword,
  Address,
  Gender,
  dob,
  hobbies}=user
  const res=await fetch('/api/user',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
   Name,
  EmailId,
  Password,
  Cpassword,
  Address,
  Gender,
  dob,
  hobbies

    })
  }); */
 /*  const data = await res.json();
  if(data.status === 422 || !data){
    alert("invalid registration");
  }
  else{
    alert("registration done")
  } */





 
 

 /*  let name,value;
  const handleChange=(e)=>{
    console.log(e)
    name=e.target.name;
    value=e.target.value;
   

  } */

 /*  const registerValue=(e)=>{
    e.preventDefault();
    const url = 'http://localhost/api/products'
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        {Name,EmailId,Password,Cpassword,Address,Dob,Gender,Hobbies}= user;
        body: JSON.stringify({ Name,Email,Password,Cpassword,Address,Dob,Gender,Hobbies })
    };
    fetch(url, requestOptions)
        .then(response => console.log('Submitted successfully'))
        .catch(error => console.log('Form submit error', error))
  };
 */

  //USING AXIOS


 
const handleLoginForm=async(e)=>{
  e.preventDefault();

      const REQUEST_ENDPOINT="api/user"
       const myHeaders = new Headers();
       myHeaders.append("content-type", `application/json`);
      const request_url = `${API_PROTOCOL}://${API_URL}${API_PORT ? `:${API_PORT}` : ""}/${REQUEST_ENDPOINT}`;
   
      const config = {
        method: "POST",
        
        
        url: request_url,
      };
    const registrationResponce = await axios(config);
    alert({registrationResponce});

}
   
  

  return (
    <div>
      <h2>New Employee Form...</h2>
      
  <form onSubmit={formik.handleSubmit}>
       
        <p>
           <label htmlFor="Name">Name : </label>
           <input type="text" name="Name" id="Name" value={formik.values.Name}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                  {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
                  
         </p>
        
         <p>
           <label htmlFor="EmailId">Email ID : </label>
           <input type="text" name="EmailId" id="EmailId" value={formik.values.EmailId}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                  {formik.touched.EmailId && formik.errors.EmailId ? <span style={{color:'red'}}>{formik.errors.EmailId}</span> : null}
                 
         </p>
         <p>
           <label htmlFor="Password"> Password </label>
           <input type="text" name="Password" id="Password" value={formik.values.Password}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                
         </p>
         {formik.touched.Password && formik.errors.Password ? <span style={{color:'red'}}>{formik.errors.Password}</span> : null}

         <p>
           <label htmlFor="Cpassword">Confirm Password </label>
           <input type="text" name="Cpassword" id="Cpassword" value={formik.values.Cpassword}
                  onChange={formik.handleChange} ></input>
                  {formik.touched.Cpassword && formik.errors.Cpassword ? <span style={{color:'red'}}>{formik.errors.Cpassword}</span> : null}     
         </p>
         <p>
           <label htmlFor="Cpassword">Address </label>
           <textarea type="text" name="Address" id="Address" value={formik.values.Address}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>
                  {formik.touched.Address && formik.errors.Address ? <span style={{color:'red'}}>{formik.errors.Address}</span> : null}     
         </p>
         <p>
           <label htmlFor="gender">please select your gender </label>
           <label>
        <input type='radio' name='Gender' id="Gender"
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          value='Male'
          
        />
        Male
      </label> 
      <label >
        <input type='radio' name='Gender' id="Gender"
          onChange={formik.handleChange} onBlur={formik.handleBlur}     
          value='Female'
           />
        Female
      </label> 
      <label>
        <input type='radio' name='Gender' id="Gender"
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          value='Other'
       />
      Other
      </label>
      {formik.touched.Gender && formik.errors.Gender ? <span style={{color:'red'}}>{formik.errors.Gender}</span> : null}   
         </p>
<p>
<label htmlFor="dob">Date of Birth</label>
      <input
         id="dob"
         name="dob"
         type="date"
         onChange={formik.handleChange} onBlur={formik.handleBlur}
         value={formik.values.dob}
      />

  {formik.touched.dob && formik.errors.dob ? <span style={{color:'red'}}>{formik.errors.dob}</span> : null}   
</p>
<p>
<label htmlFor="Tags">Hobbies</label>
          <label>
          <input type='checkbox' name='hobbies' id="hobbies"
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          value='Cricket'
       />
    

          Cricket
      </label>
        
      <label>
          <input type='checkbox' name='hobbies' id="hobbies"
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          value='Football'
       />
          Football
      </label>
      <label>
          <input type='checkbox' name='hobbies' id="hobbies"
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          value='Tenis'
       />
          Tenis
      </label>
      <label>
          <input type='checkbox' name='hobbies' id="hobbies"
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          value='Golf'
       />
          Golf
      </label>
      {formik.touched.hobbies && formik.errors.hobbies ? <span style={{color:'red'}}>{formik.errors.hobbies}</span> : null} 
</p>
         <button type="submit" onClick={handleLoginForm}  >Create</button>
  </form>
    </div> 
  )
}
export default Registration;
