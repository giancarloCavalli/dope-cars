import './styles.css';
import { ReactComponent as ProductImage } from 'assets/images/product-image.svg';

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="card-top">
        <ProductImage />
      </div>
      <div className="card-main">
        <div className="card-main-top">
          <h4>Audi Supra TT</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </div>
        <div className="card-main-bottom">
          <button type="button" className="btn btn-primary">COMPRAR</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;