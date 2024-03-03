import React from "react";
import { Link } from "react-router-dom"
import PRODUCTS from "./DUMMY"


export default function Home(){

    return <>
   {/* ( PRODUCTS.map(product) ); */}
   <div>
      <h2>Product Listings</h2>
      <div>
        {PRODUCTS.map(product => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              {/* <img src={product.image} alt={product.name} /> */}
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
}