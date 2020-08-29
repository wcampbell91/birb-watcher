import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const MyNavbar = () => {
  const logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  return (
    <div className="MyNavbar">
      <h1>My Navbar</h1>
      <button className="btn btn-danger" onClick={logMeOut}> Logout</button>
    </div>
  );
};

export default MyNavbar;
