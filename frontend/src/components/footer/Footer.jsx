import React from "react";
import style from "./footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footer_menu}>
          <div>
            <h4>Contact Us</h4>
            <div className={style.contact_details}>
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>Location</span>
              </a>
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>call +07589520</span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>test@gmail.com</span>
              </a>
            </div>
          </div>
          <div>
            <a>
              <h4>Feane</h4>
            </a>
            <p>
              Necessary, making this the first true generator
              <br /> on the Internet . It uses a dictionary
              <br /> of over 200 Latin words, combined with
            </p>
            <div className={style.social_icon}>
              <a href="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a>
                <i class="fa fa-pinterest" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div>
            <h4>Links</h4>
            <div className={style.footer_link}>
              <a href="">Home</a>
              <a href="">Term and Conditions</a>
              <a href="">About</a>
            </div>
          </div>
        </div>
        <div className={style.footer_copyright}>
          <p> &copy; All Rights Reserved By</p>
          <p> &copy; Distributed By</p>
        </div>
      </div>
    </>
  );
};

export default Footer;