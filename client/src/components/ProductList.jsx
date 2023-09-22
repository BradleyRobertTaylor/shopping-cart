import Product from "./Product";

const ProductList = ({ products, onDelete, onAddToCart, onEditProduct }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => {
          return (
            <Product
              key={product._id}
              onAddToCart={onAddToCart}
              onDelete={onDelete}
              onEditProduct={onEditProduct}
              {...product}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
