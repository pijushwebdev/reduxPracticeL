import { useState } from "react";
import { useDispatch } from "react-redux";
import { productAdded } from "../redux/products/action";


const AddProduct = () => {

  const dispatch = useDispatch();

  const [productInfo, setProductInfo] = useState({
    productName: '',
    category: '',
    imageUrl: '',
    price: '',
    quantity: '',
  });


  const inputData = (e) => {
    const {name, value} = e.target;
    
    setProductInfo((prevData) => ({
      ...prevData,
      [name] : value
    }) )
  }
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(productAdded(productInfo))
  
}


    return (
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form onSubmit={handleSubmit} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
            {/* <!-- product name --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputName">Product Name</label>
              <input className="addProductInput" onChange={inputData} name="productName" value={productInfo.productName} id="lws-inputName" type="text" required />
            </div>
            {/* <!-- product category --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputCategory">Category</label>
              <input className="addProductInput" onChange={inputData} name='category' value={productInfo.category} id="lws-inputCategory" type="text" required />
            </div>
            {/* <!-- product image url --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputImage">Image Url</label>
              <input className="addProductInput" onChange={inputData} name="imageUrl" value={productInfo.imageUrl} id="lws-inputImage" type="text" required />
            </div>
            {/* <!-- price & quantity container --> */}
            <div className="grid grid-cols-2 gap-8 pb-4">
              {/* <!-- price --> */}
              <div className="space-y-2">
                <label htmlFor="lws-inputPrice">Price</label>
                <input className="addProductInput" onChange={inputData} name="price" value={productInfo.price} type="number" id="lws-inputPrice" required />
              </div>
              {/* <!-- quantity --> */}
              <div className="space-y-2">
                <label htmlFor="lws-inputQuantity">Quantity</label>
                <input className="addProductInput" onChange={inputData} name="quantity" value={productInfo.quantity} type="number" id="lws-inputQuantity" required />
              </div>
            </div>
            {/* <!-- submit button --> */}
            <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
          </form>
        </div>
    );
};

export default AddProduct;