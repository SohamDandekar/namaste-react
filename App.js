import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1", 
    {id: "heading", abc: "xyz"}, 
    "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading); //object;

root.render(heading);

const parent = React.createElement("div", {id: "parent", key: "parent"}, 
    [
        React.createElement("div", {id: "child1", key: "child1"}, 
            [
                React.createElement("h1", {key: "child2"}, "I'm an h1 tag"),
                React.createElement("h2", {key: "child3"}, "I'm an h2 tag")
            ]
        )
    ]
);

root.render(parent);