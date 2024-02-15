const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
console.log(heading); //returns object
//here heading takes attributes like id,xyz and others and returns object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
//render returns the h1 tag which is then inserted into DOM
