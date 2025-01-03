import { useState } from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const appName = "WordForm";
  const homeHeading = `Try ${appName} - Word counter, Character counter, Remove extra spaces`;
  const location = useLocation();
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#192b3a";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar title={appName} aboutText="About" mode={mode} toggleMode={toggleMode} activePage={location.pathname === "/" ? "home" : "about"} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<TextForm heading={homeHeading} mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About mode={mode} title={appName} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
