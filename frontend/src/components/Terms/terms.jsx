import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import term from "./terms.module.css";
function Terms() {
  window.scrollTo(0, 0);

  return (
    <div className={term.cont}>
      <section className="container" dir="ltr">
        <h3>1.1 Eligibility.</h3>
        Only businesses (including sole proprietors) and non-profit
        organizations located in the United States are eligible to apply for a
        Lifetime Opportunity Account and use the Services. Lifetime Opportunity
        and its Affiliates may provide Services to you or your Affiliates in
        other countries or regions under separate agreements. You and your
        Representative must not attempt to create a Lifetime Opportunity Account
        on behalf of or for the benefit of a user whose use of the Lifetime
        Opportunity services was suspended or terminated by Lifetime
        Opportunity, unless Lifetime Opportunity approves otherwise.
        <h3>1.2 Business Representative.</h3>
        You and your Representative individually affirm to Lifetime Opportunity
        that (a) your Representative is authorized to provide User Information
        on your behalf and to bind you to this Agreement; and (b) your
        Representative is an executive officer, senior manager or otherwise has
        significant responsibility for the control, management or direction of
        your business. Lifetime Opportunity may require you or your
        Representative to provide additional information or documentation
        demonstrating your Representative’s authority.
        <h3>1.3 Sole Proprietors.</h3>
        If you are a sole proprietor, you and your Representative also affirm
        that your Representative is personally responsible and liable for your
        use of the Services and your obligations to Customers, including payment
        of amounts you owe under this Agreement.
        <h3>1.4 Age Requirements.</h3>
        If you are a sole proprietor, and you are not old enough to enter into a
        contract on your own behalf (which is commonly but not always 18 years
        old), but you are 13 years old or older, your Representative must be
        your parent or legal guardian. If you are a legal entity that is owned,
        directly or indirectly, by an individual who is not old enough to enter
        into a contract on their own behalf, but the individual is 13 years old
        or older, your Representative must obtain the consent of either your
        board or an authorized officer. The approving board, authorized officer,
        parent or legal guardian is responsible to Lifetime Opportunity and is
        legally bound to this Agreement as if it had agreed to this Agreement
        itself. You must not use the Services if you are under 13 years of age.
      </section>
    </div>
  );
}
export default Terms;
