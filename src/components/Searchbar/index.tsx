const Searchbar = () => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Type your search" aria-label="Search text" aria-describedby="basic-addon2" />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button">BUSCAR</button>
      </div>
    </div>
  );
}

export default Searchbar;