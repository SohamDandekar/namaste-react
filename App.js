import React from "react";
import ReactDOM from "react-dom/client";

const random = <span>My Name is Soham</span>;

const Title = (
    <h1 className="heading" tabIndex="5">
        Namaste React from JSX!
        {random}
    </h1>
);

const HeadingComponent = () => (
    <div>
        {Title}
        <h1>Hello World!</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
