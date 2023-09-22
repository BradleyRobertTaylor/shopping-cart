import { useState } from "react";

const AddProductForm = ({ onSubmit }) => {
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleToggleForm = () => {
    const form = document.querySelector(".add-form");
    form.classList.toggle("visible");
    reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, price, quantity }, handleToggleForm);
  };

  const reset = () => {
    setPrice("");
    setTitle("");
    setQuantity("");
  };

  return (
    <div className="add-form">
      <p>
        <button onClick={handleToggleForm} className="add-product-button">
          Add A Product
        </button>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="product-name"
            name="product-name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button onClick={handleToggleForm} type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
