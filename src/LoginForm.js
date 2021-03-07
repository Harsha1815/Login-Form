import React,{useState} from 'react'

function LoginForm({Login,error}) {
    const [details,setDetails] = useState({name:"",email: "",password:""});

    const submitHandler =e =>{
        e.preventDefault();

        Login(details);
    }

    return (
       <form onSubmit={submitHandler}>
           <div className="form-inner">
               <h1>Login</h1>
               {(error != "") ? (<div><span>{error}</span></div>) : ""}
               <div className="formgroup">
                   <label htmlFor="name">Name:</label>
                   <input type="text" name="name" id="name"  onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
               </div>
               <div className="formgroup">
               <label htmlFor="email">Email:</label>
                   <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
               </div>
               <div className="formgroup">
               <label htmlFor="password">Password:</label>
                   <input type="password" name="password" id="password"  onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
               </div>
               <div className="formgroup">
               <label htmlFor="phoneno">PhoneNo:</label>
                   <input type="phoneno" name="phoneno" id="phoneno"  onChange={e => setDetails({...details, phoneno: e.target.value})} value={details.phoneno}/>
               </div>
               <input  className="hike" type="submit" value="Login" />
           </div>
       </form>
    )
}

export default LoginForm
