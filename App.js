import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading" className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

const value = <span> This is a react element</span>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    <h1 id="head"> Namste React using Functional Component</h1>
    {value}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
