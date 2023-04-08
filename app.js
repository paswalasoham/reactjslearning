const root = ReactDOM.createRoot(document.getElementById("root"));
const uLLi = React.createElement("ul", { id: "parent" }, [
  React.createElement("li", {}, "React JS"),
  React.createElement("li", {}, "Node Js"),
  React.createElement("li", {}, "Full Stack Web Developement"),
]);

const mainDiv = React.createElement(
  "div",
  { id: "container", className: "container" },
  uLLi
);
root.render(mainDiv);
