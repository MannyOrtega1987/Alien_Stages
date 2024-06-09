// importing ClerkAuth sign in/out and user button:
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
// importing NavLink for sidebar navigation highlight:
import { NavLink } from "react-router-dom";
// importing Navigate, for login/logout page navigation:
import { Navigate } from "react-router-dom";

// importing Sidebar component:
import Sidebar from "../Sidebar/Sidebar";

// importing login page, for when user signed out, or new user enters:
import Login from "../../pages/Login/Login";

// Navbar css:
import "./Navbar.css";

// importing logo:
import Logo from "../../assets/InsistLogoSmall.png";

const Navbar = ({ children }) => {
  return (
    <>
      {/* displayed content when signed in: */}
      <SignedIn>
        <nav className="navSignedIn">
          {/* navbar container: */}
          <div className="navContainer">
            {/* Insist Logo div container: */}
            <div className="logoContainer">
              <NavLink to="/">
                <img src={Logo} alt="Insist-Logo" />
              </NavLink>
            </div>
            {/* simple navbar items: */}

            {/* ClerkAuth user profile img: */}
            <div className="userButton">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </nav>
        <Sidebar children={children} />
      </SignedIn>

      {/* displayed content when signed out: */}
      <SignedOut>
        <nav className="navSignedOut">
          <div className="navContainer">
            <img src={Logo} alt="Insist Logo" />
          </div>
          <Navigate to="/login" />
          <Login />
        </nav>
      </SignedOut>
    </>
  );
};

export default Navbar;