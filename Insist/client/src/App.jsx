// importing clerk auth and router dom:
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing clerkAuth publishable key:
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// if-statement to check for valid or missing publishable key:
if (!PUBLISHABLE_KEY) {
  throw new Error("Provided Publishable Key invalid, or is missing.");
}

// importing navbar:
import Navbar from "./components/Navbar/Navbar";

// importing pages/routes:
import Bubble from "./pages/Bubble/Bubble";
import Home from "./pages/Home/Home";
import Welcome from "./pages/Welcome/Welcome";
import Lost from "./pages/Lost/Lost";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import Topics from "./pages/Topics/Topics";
import TopicsID from "./pages/TopicsID/TopicsID";

// importing css:
import "./App.css";

function App() {
  return (
    <>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Router>
          <Navbar>
            <Routes>
              <Route path="*" element={<Lost />} />
              <Route path="/" element={<Home />} />
              <Route path="/bubble" element={<Bubble />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/topicsid" element={<TopicsID />} />
            </Routes>
          </Navbar>
        </Router>
      </ClerkProvider>
    </>
  );
}

export default App;
