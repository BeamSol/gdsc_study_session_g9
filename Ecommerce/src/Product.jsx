
import React from 'react';
import { useParams } from 'react-router-dom';
import PRODUCTS from "./DUMMY";

function Product(){
    const { productId } = useParams();
    console.log(productId);
    return <div>Product{Product.id}</div>
}
export default Product;