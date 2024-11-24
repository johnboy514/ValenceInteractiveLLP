import { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("/service-worker.js", {
          scope: "/",
        });
        if (registration.installing) {
          console.log("Service worker installing");
        } else if (registration.waiting) {
          console.log("Service worker installed");
        } else if (registration.active) {
          console.log("Service worker active");
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };

  useEffect(() => {
    if ("Notification" in window) {
      console.log("Notifications Supported");

      // Define the click handler
      const handleNotificationClick = () => {
        Notification.requestPermission().then((status) => {
          console.log("Notification Permission:", status);
          if (status === "granted") {
            new Notification("Notification Example", {
              body: "This is a sample notification.",
              icon: "./images/Logo.png",
            });
          } else {
            console.warn("Notification permission was not granted.");
          }
        });
      };

      // Attach event listener
      const notifyButton = document.getElementById("notify");
      if (notifyButton) {
        notifyButton.addEventListener("click", handleNotificationClick);
      }

      // Cleanup function to remove the listener
      return () => {
        if (notifyButton) {
          notifyButton.removeEventListener("click", handleNotificationClick);
        }
      };
    } else {
      console.log("Notifications not Supported");
    }
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
