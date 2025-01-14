
import React, {Component} from "react";


export default class Register extends Component{
  constructor(props){ //odczytujemy wartość z formularza
    super(props);
    this.state={
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){ //funkcja wysyłania
    e.preventDefault();
    const{username,password} = this.state;
    console.log(username,password);
    fetch("http://localhost:5000/login",{//łączenie się z backendem
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Acess-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        username,
        password
      })
    }).then((res)=>res.json()) 
      .then((data)=>{
      console.log(data, "userRegister");
      if(data.status==="ok"){
        alert("Zalogowano");
        window.localStorage.setItem("token",data.data);
        window.location.href="/User"; //określamy na jaką ścieżkę ma się przełączyć
      }
    })
  }

  render(){
    return (
      <div className="Main-register-container login">
        <header className="Header-register">
          <p className="text-center fs-4">Logowanie</p>
          <form className="border border border-dark-subtle border-2 rounded p-3 text-start" onSubmit={this.handleSubmit} >
            <div className="mb-3">
            <label for="inputEmail" className="form-label">Nazwa użytkownika</label>
            <input type="password" className="form-control container-fluid"  onChange={e=>this.setState({username:e.target.value})}></input>
  
            </div>
            <div className="mb-4">
              <label for="inputPassword" className="form-label">Password</label>
              <input type="password" className="form-control container-fluid"  onChange={e=>this.setState({password:e.target.value})}></input>
            </div>
            <button type="submit" className="btn btn-primary  container-fluid mb-1 text-center">Submit</button>
            <p className="text-center">Nie posiadasz konta? <a href="/register"className="bs-primary text-decoration-none">Rejestracja</a></p>
          </form>
        </header>
  
      </div>
    );
  }
}


