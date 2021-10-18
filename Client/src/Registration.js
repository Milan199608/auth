import React from 'react';
//import ReactDOM from 'react-dom';
import {useFormik} from 'formik';


const validateEmployee = empData => {
  const errors = {};

  if (!empData.Name) {
    errors.Name = 'Please Enter Employee Name';
  } else if (empData.Name.length > 20) {
    errors.Name = 'Name cannot exceed 20 characters';
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
  if (!empData.Tags) {
    errors.Tags= 'Please  Select your hobbies';
  }


  return errors;
};
const EmployeeComponent=()=>{

  const formik=useFormik({
    initialValues:{

      Name:'',
      EmailId:'',
      Password:'',
      Cpassword:'',
      Address:'',
      Gender:'',
      dob:'',
      Tags: '',


    },
    validate:validateEmployee,
    onSubmit:values=>{
      alert(JSON.stringify(values));
    }
  });

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
                  {formik.touched.Password && formik.errors.Password ? <span style={{color:'red'}}>{formik.errors.Password}</span> : null}
                 
         </p>
         <p>
           <label htmlFor="Cpassword">Confirm Password </label>
           <input type="text" name="Cpassword" id="Cpassword" value={formik.values.Cpassword}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
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
          onChange={formik.handleChange}
          value='Male'
          
        />
        Male
      </label> 
      <label >
        <input type='radio' name='Gender' id="Gender"
          onChange={formik.handleChange}      
          value='Female'
           />
        Female
      </label> 
      <label>
        <input type='radio' name='Gender' id="Gender"
          onChange={formik.handleChange}
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
         onChange={formik.handleChange}
         value={formik.values.dob}
      />

  {formik.touched.dob && formik.errors.dob ? <span style={{color:'red'}}>{formik.errors.dob}</span> : null}   
</p>
<p>
<label htmlFor="Tags">Hobbies</label>
          <label>
          <input type='checkbox' name='tags' id="tags"
          onChange={formik.handleChange}
          value='Cricket'
       />
    

          Cricket
      </label>
        
      <label>
          <input type='checkbox' name='Tags' id="Tags"
          onChange={formik.handleChange}
          value='Football'
       />
          Football
      </label>
      <label>
          <input type='checkbox' name='Tags' id="Tags"
          onChange={formik.handleChange}
          value='Tenis'
       />
          Tenis
      </label>
      <label>
          <input type='checkbox' name='Tags' id="Tags"
          onChange={formik.handleChange}
          value='Golf'
       />
          Golf
      </label>
      {formik.touched.Tags && formik.errors.Tags ? <span style={{color:'red'}}>{formik.errors.Tags}</span> : null} 
</p>


         <button type="submit">Create</button>
  </form>
    </div> 
  )
}
export default EmployeeComponent;
