import Logo from "../../Logo.png";
import Nav from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={Nav.navbar}>
      <div className={Nav.left}>
        <img className={Nav.image} src={Logo} alt="logo" />
      </div>
      <div className="left">
        <ul className={Nav.list}>
          <li>
            <a href="">Home</a>
          </li>

          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="">Terms & Conditions</a>
          </li>

          <li>
            <a href="">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
