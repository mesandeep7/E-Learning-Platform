import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Demo from './ContentComponentApp';
// import SappFile from './SappFile';

class Menu extends React.Component {
  render() {
    return (
      <React.StrictMode>
        {/* <SappFile/> */}
        <App />
        {/* <Demo/> */}
      </React.StrictMode>
    );
  }
}
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Menu />);

