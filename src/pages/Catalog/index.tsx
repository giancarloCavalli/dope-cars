import ProductCard from "components/ProductCard";
import Searchbar from "components/Searchbar";
import "./styles.css";

const Catalog = () => {
  return (
    <>
    <div className="container">
      <div className="row justify-content-md-center">
      <div className="col-10 mx-auto col-sm-12">
        <div className="search-menu">
          <Searchbar />
        </div>
      </div>
        <div className="col-10 mx-auto col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-10 mx-auto col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-10 mx-auto col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-10 mx-auto col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-10 mx-auto col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-10 mx-auto col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-10 mx-auto col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-10 mx-auto col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-10 mx-auto col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
      </div>
    </div>
    </>
  );
};

export default Catalog;
