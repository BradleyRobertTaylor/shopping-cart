import { useState } from "react";
import EditProductForm from "./EditProductForm";

const Product = ({
  onDelete,
  onEditProduct,
  onAddToCart,
  _id,
  title,
  quantity,
  price,
  handleDelete,
}) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const handleEdit = () => {};

  const deleteProduct = () => {
    onDelete(_id);
  };

  const handleAddToCart = () => {
    onAddToCart(_id);
  };

  const handleCloseForm = () => {
    setShowEditForm(false);
  };

  const handleOpenEditForm = () => {
    setShowEditForm(true);
  };

  return (
    <li id={_id} className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity}</p>
        <div className="actions product-actions">
          <button
            disabled={!Number(quantity)}
            onClick={handleAddToCart}
            className="add-to-cart"
          >
            Add to Cart
          </button>
          <button onClick={handleOpenEditForm} className="edit">
            Edit
          </button>
        </div>
        <button onClick={deleteProduct} className="delete-button">
          <span>X</span>
        </button>
      </div>
      {showEditForm && (
        <EditProductForm
          id={_id}
          price={price}
          quantity={quantity}
          title={title}
          onEditProduct={onEditProduct}
          onCloseForm={handleCloseForm}
        />
      )}
    </li>
  );
};

export default Product;
