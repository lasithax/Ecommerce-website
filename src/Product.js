import { Delete } from "@mui/icons-material";
import React from "react";
import "./Product.css";
import {
  Link
} from "react-router-dom";

function Product({ id, title, image, price, rating, quantity, isDelete }) {
  async function deleteItem(id) {
    const response = await fetch("/items/" + id, {
      method: "DELETE",
    });
    const body = await response.json();
  }

  const handleAddToBasket = () => {
    alert("Added To Basket !");
  };

  const handleDltClick = (id) => {
    deleteItem(id);
    alert("Deleted item !");
  };

  const handleUpdateClick = () => {};

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt=""></img>

      {isDelete ? <div></div> : <div>Hurry {quantity} more!</div>}

      {isDelete ? (
        <div>
          <Link
            to={{
              pathname: "/update-item",
            }}
          >
            <button
              className="updateBtn"
              onClick={handleUpdateClick}
              type="button"
            >
              Update
            </button>
          </Link>
          <button
            className="dltBtn"
            onClick={() => {
              handleDltClick(id);
            }}
            type="button"
          >
            Delete
          </button>
        </div>
      ) : (
        <button className="basketBtn" onClick={handleAddToBasket} type="button">
          Add to Basket
        </button>
      )}
    </div>
  );
}

export default Product;
