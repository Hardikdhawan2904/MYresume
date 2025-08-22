import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import MainPage from "./App"; // Your main site component

export default function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if user has already visited
    const visited = localStorage.getItem("hasVisited");
    if (!visited) {
      setShowWelcome(true);
      localStorage.setItem("hasVisited", "true"); // mark as visited
    }
  }, []);

  return (
    <>
      {showWelcome ? (
        <LandingPage onFinish={() => setShowWelcome(false)} />
      ) : (
        <MainPage />
      )}
    </>
  );
}
