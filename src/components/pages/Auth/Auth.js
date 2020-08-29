import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Auth = () => {
  const loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleProvider);
  };

  return (
    <div className="Auth">
      <h2>Auth</h2>
      <button className="btn btn-danger" onClick={loginClickEvent}>Google Log In</button>
    </div>
  );
};

export default Auth;
