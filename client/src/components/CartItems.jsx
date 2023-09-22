const CartItems = ({ cartItems }) => {
  const calculateTotal = (items) => {
    return items.map(({ price }) => price).reduce((sum, num) => sum + num, 0);
  };

  return (
    <>
      <h2>Your Cart</h2>
      {!cartItems.length ? (
        <>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
        </>
      ) : (
        <table className="cart-items">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(({ productId, title, price, quantity }) => {
              return (
                <tr key={productId}>
                  <td>{title}</td>
                  <td>{quantity}</td>
                  <td>${price}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="total">
                Total: ${calculateTotal(cartItems)}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
};

export default CartItems;
