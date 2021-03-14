import React, {useState, useEffect} from "react";
import './App.css';
import { Link } from "react-router-dom";

function Shop() {

    // to run
    // this will only run when the component mounts b/c of the =>  , []
    useEffect(() => {
        fetchItems();
    }, []);

    // creating a state to put items in
    const [items, setItems] = useState([]);

    // added async b/c its coming from a database
    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        // .then(res=>res.json())
        // .then(json=>console.log(json));

        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
        <div>
            <h1>Shop Page</h1>

            {items.map(item => (
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}`}>{item.title}
                    </Link>
                </h1>
                
            ))}
        </div>
    );
}

export default Shop;
