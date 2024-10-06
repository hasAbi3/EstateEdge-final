import { Link } from "react-router-dom";
import "./searchbar.scss";
import {useState} from 'react';

const types=["buy", "rent"];

function Searchbar(){
    const [query, setquery] = useState({
        type:"buy",
        location: "",
        minPrice: 0,
        maxPrice: 0
    })

    const switchType = (val) =>{
        setquery((prev) => ({...prev, type: val}));
    }

    const handleChange = e =>{
        setquery((prev) => ({...prev, [e.target.name]: e.target.value}));
    }
    return(
        <div className="searchBar">
            <div className="type">
                {types.map((type) => (
                    <button 
                        key={type} 
                        onClick = {()=> switchType(type)}
                        className = {query.type === type ? "active" : ""}
                    >
                    {type}
                    </button>))}
            </div>
            <form>
                <input type="text" name ="city" placeholder="City" onChange={handleChange}/>
                <input type = "number" min={0} max={10000000} name ="minPrice" placeholder ="Min Price" onChange={handleChange}/>
                <input type = "number" min={0} max={10000000} name= "maxPrice" placeholder="Max Price" onChange={handleChange}/>
                
                <Link to = { `/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>
                    <button>
                        <img src="search.png"/>
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default Searchbar;