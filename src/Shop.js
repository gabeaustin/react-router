import React, {useState, useEffect} from "react";
import './App.css';

function Shop() {

    // to run
    // this will only run when the component mounts b/c of the =>  , []
    useEffect(() => {
        fetchItems();
    }, []);

    // added async b/c its coming from a database
    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        // .then(res=>res.json())
        // .then(json=>console.log(json));

        const items = await data.json();
        console.log(items);
    }
    return (
    <div>
        <h1>Shop Page</h1>
    </div>
    );
}

export default Shop;
