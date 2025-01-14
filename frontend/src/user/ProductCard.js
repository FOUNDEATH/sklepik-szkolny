//import './ProductCard.css'
//function App() {
//  return (
//  
//  <div class="card p-2">
//    <img src="/images.jpg" class="card-img-top" alt="..."></img>
//    <div class="card-body">
//      <h5 class="card-title text-center">Burger</h5>
//      <p class="card-text">Opis:</p>
//      <p class="card-text">Cena:</p>
//      <p class="card-text">Dostępność:</p>
//      <a href="#" class="btn btn-success container-fluid">Dodaj do koszyka</a>
//    </div>
//  </div>
//  );
//}
//export default App

import React, { Component } from "react";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [], // Zainicjowane jako pusta tablica
    };
  }

  componentDidMount() {
    // Pobierz dane produktów
    fetch("http://localhost:5000/ProductGet", {
      method: "POST",  // Używamy POST zamiast GET
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"), // Wysyłasz token, jeśli go masz
      }),
    })
      .then((res) => res.json()) // Odbieramy dane w formacie JSON
      .then((data) => {
        console.log(data, "Products data");
        // Jeśli status jest OK, ustaw produkty w stanie
        if (data.status === "ok") {
          this.setState({ products: data.products });
        } else {
          console.error("Error fetching products");
        }
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        this.setState({ products: [] }); // Jeśli wystąpi błąd, ustaw pustą tablicę
      });
  }

  render() {
    const { products } = this.state;

    let productCards = [];

    if (products.length > 0) {
      // Tworzymy karty produktów za pomocą pętli
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        productCards.push(
          <div key={i} className="card p-2 m-2" style={{ width: "18rem" }}>
            <img
              src="images.jpg"  // Używamy domyślnego obrazu
              className="card-img-top"
              alt={product.productname}
            />
            <div className="card-body">
              <h5 className="card-title text-center">{product.productname}</h5>
              <p className="card-text">Opis: {product.productdesc}</p>
              <p className="card-text">Cena: {product.productprice} PLN</p>
              <p className="card-text">Ilość sztuk: {product.amount}</p>
              <button className="btn btn-success container-fluid">
                Dodaj do koszyka
              </button>
            </div>
          </div>
        );
      }
    } else {
      productCards = <p>Brak produktów do wyświetlenia</p>;
    }

    return (
      <div className="product-list">
        <div className="d-flex flex-wrap justify-content-center">
          {productCards}  {/* Renderujemy stworzone karty */}
        </div>
      </div>
    );
  }
}

