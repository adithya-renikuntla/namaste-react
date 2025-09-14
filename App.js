const heading = React.createElement(
  "h1",
  { id: "heading", className: "h1" }, // props - attributes set to the html element
  "Hello World from React!"
); // create react h1 element
console.log(heading); // heading is an object
const root = ReactDOM.createRoot(document.getElementById("root")); // create reactdom root element
console.log(root);
root.render(heading); // render converts heading object to the h1 html tag injects to the root div element
console.log(root);