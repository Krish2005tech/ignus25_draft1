import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Show the loader for 5 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setIsTransitioning(true); // Start the ripple transition
    }, 5000);

    // End the ripple transition after 2 seconds
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 7000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(transitionTimer);
    };
  }, []);

  return (
    <div className="App">
      {isLoading && (
        <div id="loader-screen">
          <div className="loader"></div>
        </div>
      )}
      {isTransitioning && <div id="ripple-mask"></div>}
      {!isLoading && !isTransitioning && (
        <div className="main-page">
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </div>
      )}
    </div>
  );
}

export default App;
