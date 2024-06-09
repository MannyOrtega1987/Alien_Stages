import React from 'react';
import "./Login.css";
import { SignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <SignedOut>
        <h1>Log In Page</h1>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
    </>
  );
};

export default Login;