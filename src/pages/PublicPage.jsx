import React from 'react';
import { Link } from 'react-router-dom';
const PublicPage = () => {
  return (
    <div>
      <h1>Public Page</h1>
      <Link to='/'>Regresar a Home</Link>
    </div>
  );
};

export default PublicPage;