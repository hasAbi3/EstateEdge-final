
import { useContext } from "react";
import Searchbar from "../../components/searchbar/Searchbar";
import "./homepage.scss";
import { AuthContext } from "../../context/AuthContext";

function Homepage(){
    const {currentUser} = useContext(AuthContext);
    console.log(currentUser);
    return(
        <div className="homepage">

            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Real Estate & Get your Dream Place </h1>
                <p>
                    Explore the best real estate options tailored to your needs. 
                    Whether you're looking to buy, rent, or invest, find the perfect place to call 
                    home with ease and confidence.
                </p>
                <Searchbar/>
                <div className="boxes">
                    <div className ="box">
                        <h1>100+</h1>
                        <h2>Property Listings</h2> 
                    </div>
                    <div className ="box">
                        <h1>Instant</h1>
                        <h2>Real time Chat</h2> 
                    </div>
                    <div className ="box">
                        <h1>Simple</h1>
                        <h2>Streamlined Search</h2> 
                    </div>
                </div>
                </div>
                
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt=""></img>
            </div>
        </div>
    )
}

export default Homepage;