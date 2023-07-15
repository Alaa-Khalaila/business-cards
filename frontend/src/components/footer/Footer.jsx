import React from "react";
import { useTranslation } from "react-i18next";
import style from "./footer.module.css";

export const Footer = () => {
  const [translate] = useTranslation("global");
  return (
    <>
      <div className={style.footer}>
        <div className="container">
        <div className={style.footer_menu}>
          <div>
            <h4>{translate("Footer.contact")}</h4>
            <div className={style.contact_details}>
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>{translate("Footer.location")}</span>
              </a>
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>{translate("Footer.call")} +07589520</span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>test@gmail.com</span>
              </a>
            </div>
          </div>
          <div>
            <a>
              <h4>{translate("Footer.logo")}</h4>
            </a>
            <p>
            {translate("Footer.text")}
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
            <h4>{translate("Footer.links")}</h4>
            <div className={style.footer_link}>
              <a href="#">{translate("Footer.home")}</a>
              <a href="">{translate("Footer.term")}</a>
              <a href="#about">{translate("Footer.about")}</a>
            </div>
          </div>
        </div>
        <div className={style.footer_copyright}>
          <p> &copy; {translate("Footer.copyRight-1")}</p>
          <p> &copy; {translate("Footer.copyRight-2")}</p>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Footer;