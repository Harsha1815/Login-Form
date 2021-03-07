import React,{useState} from "react"
import LoginForm from "./LoginForm"


function App() {
  const adminUser={
    email: "rroo@gmail.com",
    password: "123456789",
    name:"rohit",
    phoneno:"9876543210"
  }

  const [user,setUser] = useState({name:"",email:""});
  const [error,setError] = useState("");

  const Login =details =>{
    console.log(details);

    if(details.email ==adminUser.email && details.password ==adminUser.password && details.phoneno ==adminUser.phoneno && details.name == adminUser.name){
    console.log("Logged in");
    setUser({
      name:details.name,
      email:details.name  
    });
  }
  else{
    console.log("Details do not match!!!!");
    setError("Details do not match!!")
  }
  }

  const Logout =() =>{
    setUser({name:"",email:""})
  }


  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="Welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) :(
        <LoginForm  Login={Login} Error={error}/>
      )
    }
    </div>
  );
}

export default App;
