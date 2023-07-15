import Navbar from "../Navbar/Navbar";
import heroStyle from "./Hero.module.css";

function Hero() {
  return (
    <div className={heroStyle.hero}>
      <div className="container relative">
        <Navbar />
        <div className={heroStyle.paragh}>
          <h1 className={heroStyle.title}>Business Cards Store</h1>
          <p className={heroStyle.paragh2}>
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <a href="#cards"><button className={heroStyle.btn}>Order Now</button></a>
          
        </div>
      </div>
    </div>
  );
}
export default Hero;
