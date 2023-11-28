import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

const API_ENDPOINT = "http://localhost:5020/coupon-svc/api/v1/internal/client/";

const login = async (data) => {
  const res = await axios(API_ENDPOINT.coupon_service_url + "verifytoken", data);
  console.log(res.data, "RESPONSES");
  return res.data;
};

function App() {
  useEffect(() => {
    login();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
