import cont from "./Contact.module.css";
import envelope from "../../envelope.svg";
import phone from "../../phone-call.svg";
import location from "../../location.svg";

function Contact() {
  return (
    <section id="contact">
      <div className={cont.all}>
        <div className={cont.form}>
          <div className={cont.contactInfo}>
            <h3 className={cont.infoTitle}>Get in Touch</h3>
            <p className={cont.infoText}>
              Feel free to get in touch whith me. I'm always open ro discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>

            <div className={cont.info}>
              <div className={cont.information}>
                <img src={location} alt="location" className={cont.icon} />
                <p>Jordan-Amman</p>
              </div>
              <div className={cont.information}>
                <img src={envelope} alt="email" className={cont.icon} />
                <p>xxxx@gmail.com</p>
              </div>
              <div className={cont.information}>
                <img src={phone} alt="phone" className={cont.icon} />
                <p>+962 70000000</p>
              </div>
            </div>
          </div>
          <div className={cont.contactForm}>
            <span className={cont.circle}></span>
            <span className={cont.circle}></span>
            <form>
              <h3 className={cont.formTitile}>Contact Us</h3>
              <div className={cont.inputContainer}>
                <input
                  type="text"
                  name="name"
                  className={cont.input}
                  placeholder="username"
                />
              </div>

              <div className={cont.inputContainer}>
                <input
                  type="email"
                  name="email"
                  className={cont.input}
                  placeholder="Email"
                />
              </div>

              <div className={cont.inputContainer}>
                <input
                  type="text"
                  name="phone"
                  className={cont.input}
                  placeholder="Phone"
                />
              </div>

              <div className={cont.inputContainer}>
                <textarea
                  name="massage"
                  className={cont.input}
                  placeholder="massage"
                ></textarea>
              </div>
              <input type="submit" value="Send" className={cont.contactBtn} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
