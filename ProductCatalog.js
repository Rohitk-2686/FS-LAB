import React from "react";

const products=[
    {id: 'p1', name: 'Wireless Mouse', price: '$25'},
    {id: 'p2', name: 'Mechanical Keyboard', price: '$80'},
    {id: 'p3', name: 'USB-C Hub', price: '$40'},
    
];

const ProductCatalog= () => {
    return (
        <ul>
            {products.map((product) =>(
                <li key={product.id}><strong>{product.name}</strong>-{product.price}</li>)
            )}
        </ul>
    )
}

export default ProductCatalog;
