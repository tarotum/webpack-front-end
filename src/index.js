import "./index.scss";
//import $ from "jquery";

import navBar from "./components/navBar";

function component() {
  const element = document.createElement("div");
  const button = document.createElement("button");
  const br = document.createElement("br");

  button.innerHTML = "Click me and look at the console!";
  element.innerHTML = "Hello";
  element.appendChild(br);
  element.appendChild(button);

  button.onclick = e => {
    import("jquery").then(jquery => {
      const $ = jquery.default;
      $("body").css("backgroundColor", "red");
    });
    alert("click");
  };

  return element;
}

document.body.appendChild(component());
