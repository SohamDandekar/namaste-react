const About = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">About Us Page</h1>
            <form>
                <input className="p-2 m-2 mx-4 border border-black rounded-lg" placeholder="name"/>
                <input className="p-2 m-2 border border-black rounded-lg" placeholder="message"/>
                <button className="p-2 m-2 border border-black rounded-lg bg-gray-100">Submit</button>
            </form>
        </div>
    );
}

export default About;