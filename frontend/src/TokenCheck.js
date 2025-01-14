import React from 'react';
import { Navigate } from 'react-router-dom';
// Komponent ochrony tras, aby nie było dostępu do chronionych ścieżek kiedy nie ma tokena
const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem('token'); // Pobieramy token
  if(token){
    return <Component {...rest} /> // Jeśli token jest obecny, renderuj komponent
  }
  else{
    <Navigate to="/login" /> // W przeciwnym razie przekieruj na login
  }

};
export default PrivateRoute;
