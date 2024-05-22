import { FaPlus, FaMinus } from "react-icons/fa6";
import { Product } from '../models/product';
import { useLocation } from "react-router-dom";

interface OneProductProps {
  product: Product;
  onAdd: (id: number) => void;
  inCart: number;
}

const OneProduct : React.FC<OneProductProps> = ({ product, onAdd, inCart }) => {
  const design = { margin: 10, borderStyle: "dashed" };
  
  const location = useLocation();
  console.log(location);

  return (
    <div className={inCart === 1 ? 'card' : 'card-cart'} style={design}>
      <img className="card-img-top" src='https://picsum.photos/200' alt='neki alt tekst' />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">
          {product.description}
        </p>
        {location.pathname === "/cart"  ?
        <h3>Amount: {product.amount}</h3> :
        <>
          <a className="btn" onClick={() => onAdd(product.id)}><FaPlus/></a>
          <a className="btn"><FaMinus/></a>
        </>
        }
      </div>
    </div>
  )
}

export default OneProduct