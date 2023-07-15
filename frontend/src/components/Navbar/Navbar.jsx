import Logo from "../../Logo.png";
import Nav from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={Nav.navbar}>
      <div className={Nav.left}>
      Logo
      </div>
      <div className="left">
        <ul className={Nav.list}>
          <li>
            <a className={Nav.home} href="">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="">Terms & Conditions</a>
          </li>

          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
