//rafce - prečica za kreiranje funkcionalne komponente
import { Product } from "../models/product";
import OneProduct from "./OneProduct";

interface CartProps {
  allproducts: Product[];
  onAdd: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ allproducts, onAdd }) => {
  return (
    <div className="cart-container">
      <h3>This is your cart.</h3>
      {allproducts.length === 0 ? "No products in your cart" : 
      allproducts.map((product) => (
        <OneProduct
        key={product.id} 
        product={product}
        onAdd={() => onAdd(product.id)}
        inCart={0}
         />
      ))}
    </div>
  )
}

export default Cart