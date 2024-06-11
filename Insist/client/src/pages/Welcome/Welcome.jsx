import { SignIn, SignUp, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import pBGOptions from './pBGOptions.js';
import Logo from "../../assets/InsistLogoSmall.png";

import "./Welcome.css";

const Welcome = () => {

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
    })}, []);

    // const pBGSettings = useMemo(() => pBGOptions, []);

  return (
    <>
      <SignedOut>
        <div className="welcomePage">
          <Particles id="welcomeParticles" options={pBGOptions} />
          <div className="welcomeLangs">
            <h1>Welcome</h1>
            <h1>Bienvenido</h1>
            <h1>환영합니다</h1>
            <h1>ようこそ</h1>
            <h1>歡迎</h1>
            <h1>欢迎</h1>
          </div>
          <div className='logoContainer'>
            <img src={Logo} alt="Insist Logo" />
          </div>
          <h3>Don't have an account?</h3>
          <div className="signButtons">
            <a href="https://clean-starfish-94.accounts.dev/sign-up?__clerk_db_jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJkdmJfMmhib0ZGNUR5TnFvRzRoQkplZjZaRmU0ZWFuIn0.X_waz4zYq7SKJs_hLGfnCfqQfdv1uiFvXbNCd3jS9qnkWTWIyvxUwtBMjJj88d58AraSY2ohW5fTHLk0VxnhZYwfWHghAnmDPl3hNvE1Py7-eJcPuyFUpG5vlvt3V3fyCG3nB48gKzGgIXaaUBWsmWUEfIY2SR4BbK7cvhjdq-MGcnUNi6sZgKW8kNTudBbquLOLzmJX5F0ZHi5a5gTiKlpQBR9FWIeIISNoARoQxQgim--zeXt7SpYeOG6rxfvmDIHKnAQxhKXgcKQX25kvyfEPq5hsH0OngX350iOKEpXJuzPSgG_CI_6_FBbQwYLpjCebPc2HrF6llyJvZ6YjZA">
              Sign Up
            </a>
          </div>
          <h3>Already have an account?</h3>
          <div className="signButtons">
            <a href="https://clean-starfish-94.accounts.dev/sign-in?__clerk_db_jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJkdmJfMmhib0ZGNUR5TnFvRzRoQkplZjZaRmU0ZWFuIn0.X_waz4zYq7SKJs_hLGfnCfqQfdv1uiFvXbNCd3jS9qnkWTWIyvxUwtBMjJj88d58AraSY2ohW5fTHLk0VxnhZYwfWHghAnmDPl3hNvE1Py7-eJcPuyFUpG5vlvt3V3fyCG3nB48gKzGgIXaaUBWsmWUEfIY2SR4BbK7cvhjdq-MGcnUNi6sZgKW8kNTudBbquLOLzmJX5F0ZHi5a5gTiKlpQBR9FWIeIISNoARoQxQgim--zeXt7SpYeOG6rxfvmDIHKnAQxhKXgcKQX25kvyfEPq5hsH0OngX350iOKEpXJuzPSgG_CI_6_FBbQwYLpjCebPc2HrF6llyJvZ6YjZA">
              Sign In
            </a>
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
    </>
  );
};

export default Welcome;