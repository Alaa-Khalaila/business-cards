import styles from "./EditCard.module.css";
import jo from "../../images/jo.png";
import card7upper from "../../images/1-1.png";
import { useState, useContext, useEffect } from "react";
import Button from "../Button/Button";
import CartContext from "../../CartContex";
import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CardSeven from "./Cards/CardSeven/CardSeven";
import CardTwo from "./Cards/CardTwo/CardTwo";
import CardThree from "./Cards/CardThree/CardThree";
import CardFour from "./Cards/CardFour/CardFour";
import CardFive from "./Cards/CardFive/CardFive";
import CardSix from "./Cards/CardSix/CardSix";
import CardEight from "./Cards/CardEight/CardEight";
import CardTen from "./Cards/CardTen/CardTen";
import CardOne from "./Cards/CardOne/CardOne";

function EditCard() {
  const { id } = useParams();
  const [translate] = useTranslation("global");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { addToCart } = useContext(CartContext);
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const firstNumHandler = (e) => {
    setFirstNum(e.target.value);
  };
  const secondNumHandler = (e) => {
    setSecondNum(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const siteHandler = (e) => {
    setSite(e.target.value);
  };
  const locationHandler = (e) => {
    setLocation(e.target.value);
  };
  const [name, setName] = useState("Your Name");
  const [firstNum, setFirstNum] = useState("+962777777");
  const [secondNum, setSecondNum] = useState("+962888889");
  const [email, setEmail] = useState("test@gmail.com");
  const [site, setSite] = useState("www.test.com");
  const [location, setLocation] = useState("Amman - Mekka SR.");

  const [counter, setCounter] = useState(1);

  const onAddClick = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  const onRemoveClick = () => {
    if (counter - 1) {
      const newCounter = counter - 1;
      setCounter(newCounter);
    }
  };
  return (
    <>
      <div className={styles.all + " container"} dir="ltr">
        <>
        {id === "1" ? (
            <CardOne
              name={name}
              firstNum={firstNum}
              secondNum={secondNum}
              email={email}
              site={site}
              location={location}
            ></CardOne>
          ) : (
            ""
          )}
          {id === "7" ? (
            <CardSeven
              name={name}
              firstNum={firstNum}
              secondNum={secondNum}
              email={email}
              site={site}
              location={location}
            ></CardSeven>
          ) : (
            ""
          )}
          {id === "2" ? (
            <CardTwo
              name={name}
              firstNum={firstNum}
              secondNum={secondNum}
              email={email}
              site={site}
              location={location}
            ></CardTwo>
          ) : (
            ""
          )}
          {id === "3" ? (
            <CardThree
              name={name}
              firstNum={firstNum}
              secondNum={secondNum}
              email={email}
              site={site}
              location={location}
            ></CardThree>
          ) : (
            ""
          )}
          {id === "4" ? (
            <CardFour
              name={name}
              firstNum={firstNum}
              secondNum={secondNum}
              email={email}
              site={site}
              location={location}
            ></CardFour>
          ) : (
            ""
          )}
          {id === "5" ? (
            <CardFive
              name={name}
              firstNum={firstNum}
              secondNum={secondNum}
              email={email}
              site={site}
              location={location}
            ></CardFive>
          ) : (
            ""
          )}
          {id === "6" ? (
            <CardSix
              name={name}
              firstNum={firstNum}
              secondNum={secondNum}
              email={email}
              site={site}
              location={location}
            ></CardSix>
          ) : (
            ""
          )}
          {id === "8" ? (
            <CardEight
              name={name}
              firstNum={firstNum}
              secondNum={secondNum}
              email={email}
              site={site}
              location={location}
            ></CardEight>
          ) : (
            ""
          )}

          {id === "10" ? (
            <CardTen
              name={name}
              firstNum={firstNum}
              secondNum={secondNum}
              email={email}
              site={site}
              location={location}
            ></CardTen>
          ) : (
            ""
          )}


            <form dir="rtl" className={styles.formInfo}>
              <div>
                <label htmlFor="firstNum">الاسم</label>
                <input
                  onKeyUp={nameHandler}
                  defaultValue={name}
                  id="firstNum"
                  type="text"
                  className={styles.input}
                />
              </div>
              <div>
                <label htmlFor="firstNum">الرقم الاول</label>
                <input
                  onKeyUp={firstNumHandler}
                  defaultValue={firstNum}
                  id="firstNum"
                  type="text"
                  className={styles.input}
                />
              </div>
              <div>
                <label htmlFor="secondNum">الرقم الثاني</label>
                <input
                  defaultValue={secondNum}
                  type="text"
                  onKeyUp={secondNumHandler}
                  className={styles.input}
                />
              </div>
              <div>
                <label htmlFor="secondNum">الموقع الالكتروني</label>
                <input
                  defaultValue={site}
                  type="text"
                  onKeyUp={siteHandler}
                  className={styles.input}
                />
              </div>
              <div>
                <label htmlFor="secondNum">الايميل</label>
                <input
                  defaultValue={email}
                  type="text"
                  onKeyUp={emailHandler}
                  className={styles.input}
                />
              </div>
              <div>
                <label htmlFor="secondNum">الموقع</label>
                <input
                  defaultValue={location}
                  type="text"
                  onKeyUp={locationHandler}
                  className={styles.input}
                />
              </div>
              <div>
                <div>عدد البطاقات:</div>
                <div className={styles.btns}>
                  <Button
                    onClick={onRemoveClick}
                    classList="red"
                    text="-"
                  ></Button>
                  <span>{counter}</span>
                  <Button
                    onClick={onAddClick}
                    classList="yellow"
                    text="+"
                  ></Button>
                </div>
              </div>

              {/* <div>
            ملاحظة: سيتم ارسال رمز خاص لكل بطاقة للدخول على السحب, ضاعف فرصة
            ربحك للسيارة بشراء اكثر من بطاقة
          </div> */}
              <NavLink to="/" className="mt-2">
                <Button
                  classList={styles.add + " yellow"}
                  text="اضف الى السلة"
                  onClick={() => {addToCart(counter, id);window.scrollTo(0, 0)}}
                ></Button>
              </NavLink>
            </form>
        </>
      </div>
    </>
  );
}

export default EditCard;
