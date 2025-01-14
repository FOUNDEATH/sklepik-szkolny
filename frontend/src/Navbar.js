import React, { useState } from 'react';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const items = [
    'Apple Pie',
    'Banana Bread',
    'Carrot Cake',
    'Chocolate Chip Cookies',
    'Donut',
    'Eclair',
    'Fritters',
  ];

  // Funkcja do obsługi wyszukiwania
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    // Filtrowanie wyników na podstawie wprowadzonego tekstu
    const filteredResults = items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };
  const logOut = () => {
    window.localStorage.clear(); // Usuwanie tokenu z localStorage
    window.location.href = './'; // Przekierowanie na stronę główną
  };
  
  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand text-primary-emphasis" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"></path>
          </svg>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link navbar-brand text-primary-emphasis" href="#">Sklep</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" onClick={logOut}>Wyloguj się</a>
            </li> 
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" >Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          {/* Formularz wyszukiwania */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>

      {/* Wyświetlanie wyników wyszukiwania */}
      {searchTerm && searchResults.length > 0 && (
        <div className="search-results">
          <ul className="list-group">
            {searchResults.map((item, index) => (
              <li key={index} className="list-group-item d-flex-align">{item}</li>
            ))}
          </ul>
        </div>
      )}
      {searchTerm && searchResults.length === 0 && (
        <div className="search-results">
          <p>No results found</p>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
