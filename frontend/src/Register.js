
import React, {Component} from "react";
export default class Register extends Component{
  constructor(props){ //odczytujemy wartość z formularza
    super(props);
    this.state={
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this); //umożliwia użycie this w funkcji handleSubmit
  }
  handleSubmit(e){ //funkcja wysyłania
    e.preventDefault(); //zapobiega przeładowania strony po uzupełnieniu formularza
    const{username,password} = this.state;
    fetch("http://localhost:5000/register",{//łączenie się z backendem, tam też wysyłamy dane
      method:"POST",
      crossDomain:true, //umożliwia łączenie się z poziomu wielu domen, aby działał frontend i backend
      headers:{
        "Content-Type":"application/json", //określamy jakiego typu chcemy dane
        Accept:"application/json", //oczekujemy na odpowiedź w formacie JSON
        "Acess-Control-Allow-Origin":"*", //zezwala na dostęp z różnych domen (frontend oraz backend)
      },
      body:JSON.stringify({
        username,
        password
      })
    }).then((res)=>res.json()) 
      .then((data)=>{
      console.log(data, "userRegister"); //wyświetlamy odpowiedź serwera w konsoli
    })
  }

  render(){
    return (
      <div className=" login">
        
        <header className="Header-register">
          <p className="text-center fs-4">Rejestracja</p>
          <form className="border border border-dark-subtle border-2 rounded p-3 text-start" onSubmit={this.handleSubmit} >
            <div className="mb-3">
            <label className="form-label">Nazwa użytkownika</label>
            <input type="text" className="form-control container-fluid" onChange={e=>this.setState({username:e.target.value})}></input>
  
            </div>
            <div className="mb-4">
              <label className="form-label">Hasło</label>
              <input type="password" className="form-control container-fluid"  onChange={e=>this.setState({password:e.target.value})}></input>
            </div>
            <button type="submit" className="btn btn-primary  container-fluid">Wyślij</button>
            <p className="text-center">Posiadasz już konto? <a href="/login"className="bs-primary text-decoration-none">Logowanie</a></p>
          </form>
        </header>
  
      </div>
    );
  }
}


