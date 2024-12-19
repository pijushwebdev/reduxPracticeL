/* eslint-disable react/prop-types */


const ProductCard = ({product}) => {

  const { productName, category, imageUrl, price, quantity } = product;

    return (
        <div className="lws-productCard">
          <img className="lws-productImage" src={imageUrl} alt="product" />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">{productName}</h4>
            <p className="lws-productCategory">{category}</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
              <p className="productQuantity">{quantity} <span className="lws-quantity">30</span></p>
            </div>
            <button className="lws-btnAddToCart">Add To Cart</button>
          </div>
        </div>
    );
};

export default ProductCard;