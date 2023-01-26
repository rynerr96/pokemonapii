import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainLayaut = () => {

  const name = useSelector(state => state.userName);

  if (name != '') {
    return <Outlet />
  } else {
    return (
      <>
        <Navigate to='/' />
      
      </>
    )
  }
};

export default MainLayaut;