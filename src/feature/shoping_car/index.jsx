import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct, shopingCar } from "./shopingCarSlice";
import "./style.css";

let initialProducts = [
  { id: 1, name: "shampoo", price: 100 },
  { id: 2, name: "shampoo", price: 100 },
  { id: 3, name: "shampoo", price: 100 },
  { id: 4, name: "shampoo", price: 100 },
];

export function ShopingCar() {
  const _shopingCar = useSelector(shopingCar);
  const dispatch = useDispatch();
  console.log("_shopingCar", _shopingCar);

  return (
    <div>
      <h1>Productos Disponibles</h1>
      {initialProducts.map((element) => {
        return (
          <div key={element.id}>
            <h4>name: {element.name}</h4>
            <h4>price: {element.price}</h4>
            <button onClick={() => dispatch(addProduct(element))}>
              Add To Cart
            </button>
          </div>
        );
      })}
      <h1>Productos Agregados</h1>
      {_shopingCar &&
        _shopingCar.map((element) => {
          return (
            <div key={element.id}>
              <h4>name: {element.name}</h4>
              <h4>price: {element.price}</h4>
              <button onClick={() => dispatch(deleteProduct(element))}>
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
}
