import styles from "./Refund.module.css";

const Refund = () => {
  return (
    <>
      <div className={styles.cont}>
        <section className="container" dir="ltr">
          <strong>Product:</strong> At DotMedia, we are committed to our
          customers’ satisfaction. If the product did not meet your expectations
          or was defective, you can refer to the following policies to request
          for a refund, exchange or repairment in terms of your situation.
          <br />
          <br />
          <br />
          <strong>Accessories:</strong> If you’re unsatisfied with any of the
          accessories, we can get it replaced or issue you a full refund anytime
          you need. The return and refund policy for accessories is aligned with
          that of the camera. And the new replacements will be shipped to you
          with freight borne by us.
          <br />
          <br />
          <br />
          <strong>Important Note:</strong> Normally the orders that are under
          processing, being on hold or have been shipped out (you have received
          the tracking number or your order status is completed) cannot be
          cancelled. If you have to refuse delivery after the package is
          dispatched from Reolink due to force majeure, you are subject to the
          following return and refund policies and must pay for the original
          shipping charges, which will be deducted from your refund.<br></br>
          <br />
          <br /> Refund within 48 hours
        </section>
      </div>
    </>
  );
};

export default Refund;
