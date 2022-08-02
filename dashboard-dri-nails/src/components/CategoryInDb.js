import React from "react";

function LastCategoryInDb() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorías actuales de Productos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-4 mb-4 cat-top">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Repuestos:
                <p>20 Productos</p></div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 cat-top">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Accesorios:
                <p>20 Productos</p></div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 cat-top">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Herramientas:
                <p>20 Productos</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastCategoryInDb;
