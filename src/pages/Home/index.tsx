import { ReactComponent as HomeImage } from 'assets/images/home-image.svg';
import { Link } from 'react-router-dom';
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-main bg-primary">
        <div className="image-container col-xl">
          <HomeImage />
        </div>
        <div className="main-content col-xl">
          <h4>O carro perfeito para você</h4>
          <span>Conheça nossos carros e dê mais um passo na realização do seu sonho</span>
        </div>
      </div>
      <div className="home-bottom">
        <div className="home-bottom-top">
          <Link to="/products">
            <button type="button" className="btn btn-primary btn-lg">VER CATÁLOGO</button>
          </Link>
        </div>
        <div className="home-bottom-bottom">
          Comece agora a navegar
        </div>
      </div>
    </div>
  );
}

export default Home;