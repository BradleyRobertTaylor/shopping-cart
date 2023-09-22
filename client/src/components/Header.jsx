import CartItems from "./CartItems";

const Header = ({ cartItems, onCheckout }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <CartItems cartItems={cartItems} />
        <button
          onClick={onCheckout}
          className="checkout"
          disabled={!cartItems.length}
        >
          Checkout
        </button>
      </div>
    </header>
  );
};

export default Header;
