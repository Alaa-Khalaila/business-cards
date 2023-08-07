import cont from "./Contact.module.css";
import envelope from "../../envelope.svg";
import phone from "../../phone-call.svg";
import location from "../../location.svg";
import { useTranslation } from "react-i18next";

function Contact() {
  const [translate] = useTranslation("global");
  return (
    <section id="contact">
      <div className={cont.all}>
        <div className={cont.form}>
          <div className={cont.contactInfo}>
            <h3 className={cont.infoTitle}>{translate("Contact.Get_in_Touch")}</h3>
            <p className={cont.infoText}>
            {translate("Contact.text")}
            </p>

            <div className={cont.info}>
              <div className={cont.information}>
                <img src={location} alt="location" className={cont.icon} />
                <p>{translate("Contact.location")}</p>
              </div>
              <div className={cont.information}>
                <img src={envelope} alt="email" className={cont.icon} />
                <p>Info@petraoutsourcing.com</p>
              </div>
              <div className={cont.information}>
                <img src={phone} alt="phone" className={cont.icon} />
                <p>0786577777</p>
              </div>
            </div>
          </div>
          <div className={cont.contactForm}>
            <span className={cont.circle}></span>
            <span className={cont.circle}></span>
            <form className={cont.formDetails}>
              <h3 className={cont.formTitile}>{translate("Contact.title")}</h3>
              <div className={cont.inputContainer}>
                <input
                  type="text"
                  name="name"
                  className={cont.input}
                  placeholder={translate("Contact.name")}
                />
              </div>

              <div className={cont.inputContainer}>
                <input
                  type="email"
                  name="email"
                  className={cont.input}
                  placeholder={translate("Contact.email")}
                />
              </div>

              <div className={cont.inputContainer}>
                <input
                  type="text"
                  name="phone"
                  className={cont.input}
                  placeholder={translate("Contact.phone")}
                />
              </div>

              <div className={cont.inputContainer}>
                <textarea
                  name="message"
                  className={cont.input}
                  placeholder={translate("Contact.message")}
                ></textarea>
              </div>
              <input type="submit" value={translate("Contact.button")} className={cont.contactBtn} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
