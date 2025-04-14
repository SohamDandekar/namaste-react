const heading = React.createElement(
    "h1", 
    {id: "heading", abc: "xyz"}, 
    "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading); //object;

root.render(heading);

const parent = React.createElement("div", {id: "parent"}, 
    [
        React.createElement("div", {id: "child1"}, 
            [
                React.createElement("h1", {}, "I'm an h1 tag"),
                React.createElement("h2", {}, "I'm an h2 tag")
            ]
        ),
        React.createElement("div", {id: "child2"}, 
            [
                React.createElement("h1", {}, "I'm an h1 tag"),
                React.createElement("h2", {}, "I'm an h2 tag")
            ]
        )
    ]
);

root.render(parent);