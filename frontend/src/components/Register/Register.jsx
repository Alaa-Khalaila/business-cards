import cont from "./Register.module.css";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <section id="contact" dir="ltr">
      <div className={cont.all}>
        <div className={cont.form}>
          <div className={cont.contactInfo}>
            <h3 className={cont.infoTitle}>Register</h3>
            <div className={cont.inputContainer}>
              <label>Phone</label>
              <input type="tel" name="phone" className={cont.input} />
            </div>
            <div className={cont.inputContainer}>
              <label>Password</label>

              <input
                type="password"
                name="password"
                className={cont.input}
                placeholder="Enter your password"
              />
            </div>
            <div className={cont.inputContainer}>
              <label>Confirm password</label>

              <input type="password" name="password" className={cont.input} />
            </div>
            <input type="submit" value="submit" className={cont.contactBtn} />
            <p className={cont.have}>
              You have an account? <NavLink to="/login">sign in </NavLink>
            </p>
          </div>
          <div className={cont.contactForm}>
            <p className={cont.hello}>
              Hello! Welcome to the Lifetime Opportunity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Register;
