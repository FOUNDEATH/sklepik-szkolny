import React, {Component} from "react";
export default class Register extends Component{
  render(){
    return (
      <div class="Footer-main container-fluid bg-body-tertiary position-sticky" data-bs-theme="dark">
          <footer class="py-3">
              <ul class="nav justify-content-center border-bottom pb-3 mb-3 ">
                <li class="nav-item dropdown ">
                      <a class="nav-link dropdown-toggle text-body-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Kontakt
                      </a>
                      <ul class="dropdown-menu text-center ">
                          <li><a class="dropdown-item" href="#">Kontakt:</a></li>
                          <li><hr class="dropdown-divider"></hr></li>
                          <li><a class="dropdown-item" href="#">E-mail: example@gmail.com</a></li>
                          <li><a class="dropdown-item" href="#">Telefon: 111222333</a></li>
                      </ul>
                  </li>
              </ul>
              <p class="text-center text-body-secondary">Dawid Wróbel 4P</p>
          </footer>
      </div>
    );
  }
}
  