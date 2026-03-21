import User from "./User";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class Contact extends Component {
  constructor(props){
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent Did Mount");
  }

  render(){

    console.log("Parent Render");

    return (
      <div>
          <h1>Contact Us Page</h1>
          <User name={"Soham"} location={"Thane"}/>
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
      </div>
    );
  }
}

export default Contact;