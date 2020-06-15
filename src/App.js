import React from "react";
import RESTy from "./components/RESTy";
import "./styles.scss";

/**
 * Parent component that returns the header, core content, and footer
 *
 * @component
 * @example
 * return (
 *   <h1>RESTy</h1>
 *   <RESTy />
 *   <div>Created by Earl Jay Caoile</div>
 * )
 */
export default function App() {
  return (
    <div className="App">
      <h1 className="header">RESTy</h1>
      <RESTy />
      <div className="footer">Created by Earl Jay Caoile</div>
    </div>
  );
}
