import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const styles_card = {
    height:  'auto'
  }

  function reduceText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
  
    return text.substring(0, maxLength) + '...';
  }

  return (
  <div className='container'>
    <h1>Lista de Productos</h1>
    <div className='row'>
    { products.map(product => (
      <div className="card col-md-3 box-shadow" style={ styles_card } key={ product.id }>
      <img className="card-img-top" style={{ height:" 250px", width: "100%", display: "block"}} src={ product.image } alt={ product.title }/>
        <div className="card-body">
          <h5 className="card-title" >{ product.title }</h5>
          <div style={{overflow: 'hidden' }}>
            <p className="small card-text">{ reduceText(product.description, 100) }</p>
          </div>
          
          <p>${ product.price }</p>
          <button type="button" className="btn btn-primary">Comprar</button>
        </div>
      </div>

    ))}
    </div>
  </div>
  );

  
}
{/* <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
    </div> */}
