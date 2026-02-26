import React from "react";

class User extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            info: {
                name: "Dummy",
                publicRepos: "0"
            }
        };

        console.log("Child Constructor");
    }

    async componentDidMount(){
        console.log("Child Did Mount");

        const data = await fetch("https://api.github.com/users/SohamDandekar");
        const json = await data.json();

        this.setState({
            info:{
                name: json.login,
                publicRepos: json.public_repos
            }
        });
    }

    componentDidUpdate(){
        console.log("Child Did Update");
    }

    componentWillUnmount(){
        console.log("Child Will Unmount");
    }

    render(){

        console.log("Child Render");

        const {name, publicRepos} = this.state.info;

        return <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Public Repos: {publicRepos}</h3>
            <h4>Insta: @sd9</h4>
        </div>
    }
}

export default User;