import "./Navbar.scss";
import profile from "../../../public/profileimg.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/dashboard-logo.svg" alt="" />
        <span>Yönetim Paneli</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notifications">
          <img src="/notifications.svg" alt="" className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img src={profile} alt="" className="icon" />
          <span>Harun</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
