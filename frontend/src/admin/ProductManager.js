
import React, {Component} from "react";
export default class Register extends Component{
  constructor(props){ //odczytujemy wartość z formularza
    super(props);
    this.state={
      productname:"",
      productprice:"",
      productdesc:"",
      imageUrl:"",
      amount:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){ //funkcja wysyłania
    e.preventDefault();
    const{productname,productprice,productdesc,imageUrl,amount} = this.state;
    console.log(productname,productprice,productdesc,imageUrl,amount);
    fetch("http://localhost:5000/ProductAdd",{//łączenie się z backendem
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Acess-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        productname,
        productprice,
        productdesc,
        imageUrl,
        amount,
      })
    }).then((res)=>res.json()) 
      .then((data)=>{
      console.log(data, "ProductAdd");
    })
  }

  render(){
    return (
      <div className=" login">
        <header className="Header-register">
          <p className="text-center fs-4">Dodawanie produktów</p>
          <form className="border border border-dark-subtle border-2 rounded p-3 text-start" onSubmit={this.handleSubmit} >
            <div className="mb-4">
              <label className="form-label">Nazwa pliku (z rosszerzeniem)</label>
              <input type="text" className="form-control container-fluid"  onChange={e=>this.setState({imageUrl:e.target.value})}></input>
              <p className="text-secondary">Należy wcześniej dodać zdjęcie do folderu public w projekcie</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Nazwa produktu:</label>
              <input type="text" className="form-control container-fluid"  onChange={e=>this.setState({productname:e.target.value})}></input>
            </div>
            <div className="mb-4">
              <label className="form-label">Cena</label>
              <input type="text" className="form-control container-fluid"  onChange={e=>this.setState({productprice:e.target.value})}></input>
            </div>
            <div className="mb-4">
              <label className="form-label">Opis</label>
              <input type="text" className="form-control container-fluid"  onChange={e=>this.setState({productdesc:e.target.value})}></input>
            </div>
            <div className="mb-4">
              <label className="form-label">Ilość</label>
              <input type="text" className="form-control container-fluid"  onChange={e=>this.setState({amount:e.target.value})}></input>
            </div>
            
            <button type="submit" className="btn btn-primary  container-fluid">Dodaj produkt</button>
          </form>
        </header>
  
      </div>
    );
  }
}


