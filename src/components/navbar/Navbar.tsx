import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Personel Takip Sistemi</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification"></div>
        <div className="user"></div>
        <img src="logo.svc" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
