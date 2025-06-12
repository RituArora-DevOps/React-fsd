import { useState } from 'react';

export default function DummyApi() {

  const [formData, setFormData] = useState({name: "", email: ""});
  const [errors, setErrors] = useState({});

  const handleChange = (e)=> {
    setFormData({...formData, [e.target.name]: e.target.value})
    // we want to see if any error happens it happens in which attribute
    setErrors({...errors, [e.target.name]: ""}) // will remove the errors in errors
  }

  // custom validation
  // you check f you have empty space
  function validateForm() {
    const newErrors = {};
    if(!formData.name.trim) {
      newErrors.name = "Name is required";}
    if(!formData.email.trim) {
      newErrors.email = "Email is required";
    }   
    //REGEX CHECK

    // more logic to control the sql injection
   
    return newErrors; // i want to return json
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
  //   //https://jsonplaceholder.typicode.com/posts
  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'}
  // }).then(res => res.json())
  // .then(data => console.log(data))

 
  // before calling the api 
  // I will add some validation
  const newErrors = validateForm();
  // if it is not empty => setErrors to show messages
  if(Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return; // it does not call the api
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
       // 'Authorization': 'Client-ID YOUR_ACCESS_KEY'
    },
    body: JSON.stringify( formData
    //   { //provide form values
    //   // name: e.target.name.value,
    //   // email: e.target.email.value
    // }
  ),
  })
  .then(res => res.json())
  .then(data => 
    setFormData({name: "", email: ""}),
  )
  .catch(err => {
    console.log(err);
    setErrors(err);
  });
};

  return (
    <div>
      <h2>Submit the form to API</h2>
      <form 
        onSubmit={handleSubmit} 
        style={{
          display: 'flex', 
          flexDirection: 'column', 
          gap:"1rem", 
          maxWidth: "300px"
          }}>
          
        <input 
          name="name" 
          // required={true}
          value= {formData.name} 
          onChange={handleChange}/>
          {errors.name && <span style ={{color: "red"}}>{errors.name}</span>}
        <input 
          name="email"
          // required={true}
          value= {formData.email} 
          onChange={handleChange}/>
          {errors.email && <span style={{color: "red"}}>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


