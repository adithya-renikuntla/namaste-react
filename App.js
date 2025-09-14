/**
 * Create the below HTML Nested Structure using React
 * 
 * <div id="parent">
        <div id="child">
            <h1>I am H1 Tag</h1>
            <h2>I am H2 Tag</h2>
        </div>
    </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    // create an array for multiple child react elements
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag"),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root")); // create reactdom root element

root.render(parent); // render converts react element object(s) to the html tag(s) injects to the root div element
console.log(root);
