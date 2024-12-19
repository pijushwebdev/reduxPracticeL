import { useSelector } from "react-redux";
import "./App.css";
import AddProduct from "./components/AddProduct";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ImageUploader from "./components/imageUploader/ImageUploader";
import DragableImageUploader from "./components/imageUploader/DragableImage";
import Todo from "./redux/todos/Todo";

function App() {
  const products = useSelector((state) => state.products);


  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 container mx-auto">
        <div className="col-span-9 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="col-span-3 ">
          <AddProduct />
        </div>
      </div>

      <ImageUploader/>

      <DragableImageUploader/>

      <Todo/>
    </>
  );
}

export default App;
