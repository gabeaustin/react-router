import React, {useState, useEffect} from "react";
import './App.css';
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({
        // image: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const item = await fetchItem.json();
            // .then(res=>res.json())
            // .then(json=>console.log(json))
            setItem(item);
        console.log(item.image);

    };

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.image} />                
        </div>
    )
}

export default ItemDetail;
