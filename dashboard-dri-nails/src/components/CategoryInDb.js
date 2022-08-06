import React, { useState, useEffect } from 'react';
import ProductsForCategory from "./ProductsForCategory";

function CategoryInDb() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:3001/api/products`)
          .then(response => response.json())
          .then((data) => {
              setCategories(data.allCategories);
          })
          .catch((error) => console.log(error));
  }, []);


  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Productos por categoría
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            
              {categories.map( (category, i) => {

                return <ProductsForCategory {...category} key={i}/>
            
            })}
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryInDb;
