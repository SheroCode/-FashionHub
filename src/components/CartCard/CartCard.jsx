import { useContext } from "react";
import { CartStore } from "../../Contexts/CartContext/CartContext";

function CartCard({ product }) {
  const { increaseQuantity, decreaseQuantity } = useContext(CartStore);

  return (
    <div className="card mb-3 shadow">
      <div className="row g-0 align-items-center">
        <div className="col-md-4">
          <img
            src={product.thumbnail}
            className="img-fluid rounded-start"
            alt={product.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text text-truncate">{product.description}</p>
            <p className="card-text fw-semibold">$ {product.price}</p>

            {/* Quantity buttons */}
            <div className="btn-group mt-2" role="group" aria-label="Quantity">
              <button
                type="button"
                onClick={() => increaseQuantity(product.id)}
                className="btn btn-outline-success"
              >
                +
              </button>
              <button type="button" className="btn">
                {product.quantity}
              </button>
              <button
                type="button"
                onClick={() => decreaseQuantity(product.id)}
                className="btn btn-outline-danger"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
