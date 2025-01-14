function Footer() {
    return (
        <div className="Footer-main container-fluid bg-body-tertiary position-sticky" data-bs-theme="dark">
            <footer className="py-3">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">

                  <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle text-body-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Kontakt
                        </a>
                        <ul className="dropdown-menu text-center ">
                            <li><a className="dropdown-item" href="#">Kontakt:</a></li>
                            <li><hr className="dropdown-divider"></hr></li>
                            <li><a className="dropdown-item" href="#">E-mail: example@gmail.com</a></li>
                            <li><a className="dropdown-item" href="#">Telefon: 111222333</a></li>
                        </ul>
                    </li>
                </ul>
                <p className="text-center text-body-secondary">Dawid Wróbel 4P</p>
            </footer>
        </div>

    );
  }
  export default Footer;
  
  